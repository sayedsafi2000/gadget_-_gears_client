import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/Authprovider';

const BookingModal = ({ catagories }) => {
    const { user } = useContext(AuthContext);
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.price.value;
        const booking={
            name,
            email,
            title,
            price
        }
        console.log(booking)
        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data =>{
               console.log(data)
               toast.success("Booking successful")
            } )

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="my-modal-4">
                    <h2 className='text-3xl text-center font-bold'>Booking for buy</h2>
                    <form onSubmit={handleBooking} action="">
                        <div className=''>
                            <label className='block' htmlFor="">Buyers Name</label>
                            <input name='name' defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className=''>
                            <label className='block' htmlFor="">Buyers Email</label>
                            <input name='email' defaultValue={user?.email} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className=''>
                            <label className='block' htmlFor="">Product Name</label>
                            <input name='title' defaultValue={catagories?.title} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className=''>
                            <label className='block' htmlFor="">Product Price</label>
                            <input name='price' defaultValue={catagories?.price} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <input className='btn w-full  bg-gray-900' type="submit" value="Booking" />
                    </form>
                </label>
            </label>
        </div>
    );
};

export default BookingModal;