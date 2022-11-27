import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import useTitle from '../../Hooks/useTitle';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const pay = useLoaderData();
    const { title, price } = pay;
    // console.log(pay)
    useTitle("Payment")
    return (
        <div>
            <h3 className='text-lg font-bold'>Payment for {title}</h3>
            <p className="text-xl">Please Pay <span className='font-bold'>${price}</span></p>
            <div className="lg:flex justify-between items-center">
                <img className='w-9/12 mx-auto lg:w-1/3 p-5' src="https://i.ibb.co/TgrLN5Z/E-Wallet-bro.png" alt="" />
                <div className='w-full lg:w-1/3 mx-auto mt-14 border p-5 bg-blue-200 shadow-xl'>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm pay={pay} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;