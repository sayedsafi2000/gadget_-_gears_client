import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/Authprovider';

const BookingModal = ({ booking }) => {
    const { user } = useContext(AuthContext);
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const image = booking.image;
        const bookings={
            name,
            email,
            title,
            price,
            image,
            phone,
            location
        }

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookings)
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
                            <input readOnly name='name' defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className=''>
                            <label className='block' htmlFor="">Buyers Email</label>
                            <input name='email' readOnly defaultValue={user?.email} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className=''>
                            <label className='block' htmlFor="">Product Name</label>
                            <input name='title' readOnly defaultValue={booking?.title} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className=''>
                            <label className='block' htmlFor="">Product Price</label>
                            <input name='price' readOnly defaultValue={booking?.price} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className=''>
                            <label className='block' htmlFor="">Phone Number</label>
                            <input name='phone' type="text" placeholder="Enter Your Phone Number" className="input input-bordered w-full" />
                        </div>
                        <div className=''>
                            <label className='block' htmlFor="">Meeting Location</label>
                            <input name='location' type="text" placeholder="Where you want to meet" className="input input-bordered w-full" />
                        </div>
                        <input className='btn w-full  mt-5 bg-gray-900' type="submit" value="Booking" />
                    </form>
                </label>
            </label>
        </div>
    );
};

export default BookingModal;