import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const pay = useLoaderData();
    const { title, price } = pay;
    // console.log(pay)
    return (
        <div>
            <h3 className='text-lg font-bold'>Payment for {title}</h3>
            <p className="text-xl">Please Pay <span className='font-bold'>${price}</span></p>
            <div className='w-10/12 lg:w-1/2 mx-auto mt-14'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm pay={pay} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;