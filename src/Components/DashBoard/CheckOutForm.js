import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CheckOutForm = ({ pay }) => {
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing,setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const {name,email,_id} = pay;
    const price = parseInt(pay.price);
    // console.log(price)
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError("")
        }
        setSuccess("");
        setProcessing(true);
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message);
            return;
          }
          if(paymentIntent.status === "succeeded"){
            // payment store in database 
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                paidId : _id

            }
            fetch("http://localhost:5000/payments",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    setSuccess("Your Payment Successfull")
                    setTransactionId(paymentIntent.id);
                    toast.success("Payment Successfull")
                }
            })
          
          }
          setProcessing(false)
        //   console.log("paymentIntent",paymentIntent)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-accent mt-5 text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">
                {cardError}
            </p>
            <p>
                {
                    success && <div>
                        <p className='text-green-500'>{success}</p>
                        <p>Your Transaction Id is: <span className='text-yelloe-600'>{transactionId}</span></p>
                    </div>
                }
            </p>
        </>
    );
};

export default CheckOutForm;