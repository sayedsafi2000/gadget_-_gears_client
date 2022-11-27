import React, { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/Authprovider';
const AllCategorys = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const handleAddtoService = event => {
        event.preventDefault();
        const imgHostKey = process.env.REACT_APP_Imgbb_Key;
        const createAt = new Date().getTime();
        const getFullTime = new Date().toLocaleString();
        const form = event.target;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append("image", image);
        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const userName = user?.displayName;
                    const userEmail = user?.email;
                    const image = imgData.data.url;
                    const Title = form.title.value;
                    const description = form.description.value;
                    const place = form.place.value;
                    const condition = form.condition.value;
                    const price = form.price.value;
                    const use = form.use.value;
                    const orgPrice = form.orgPrice.value;
                    // const img = form.img.value;
                    const phone = form.phone.value;
                    const category = form.category.value;

                    const product = {
                        title: Title,
                        price: price,
                        place: place,
                        orgPrice: orgPrice,
                        category: category,
                        image: image,
                        description: description,
                        condition: condition,
                        phone: phone,
                        use: use,
                        createAt,
                        postedTime: getFullTime,
                        userName,
                        userEmail
                        // photoURL:photoURL 
                    }
                    // console.log(product)
                    fetch("https://gadget-and-gears-server.vercel.app/category/allCategories", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            form.reset();
                            toast.success("Service Added Successfully")
                            // console.log(data)
                            navigate("/dashboard/myproduct")
                            
                        })
                        .catch(err => console.log(err))
                }
            })

    }
    return (
        <div className='w-10/12 lg:w-5/12 mx-auto'>
            <h2 className='text-2xl font-bold'>ADD YOUR PRODUCTS YOU WANT TO SELL</h2>
            <form onSubmit={handleAddtoService} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Product Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='title' id="title" type="text" placeholder="add your product you want to sell" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Resale Price
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='price' id="price" type="number" placeholder="price" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orgPrice">
                        Original Price
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='orgPrice' id="orgPrice" type="number" placeholder="Product Original Price" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="use">
                        Year Of Use
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='use' id="use" type="text" placeholder="How long you used this phone" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="place">
                        Location
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='place' id="place" type="text" placeholder="Dhaka, Sylhet, Comilla " />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Select Category
                    </label>
                    <select name='category' className="select select-bordered w-full max-w-xs mb-5">
                        <option selected>android</option>
                        <option>windows</option>
                        <option>tablet</option>
                        <option>featured</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="img">
                        Products Condition
                    </label>
                    <select name='condition' className="select select-bordered w-full max-w-xs mb-5">
                        <option selected>Full Fresh</option>
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Problem</option>
                    </select>
                </div>
                <input type="file" name='image' className="input input-bordered" required />
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input name='phone' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Enter Some phone" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description About Your Product
                    </label>
                    <textarea name='description' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Enter Some description" />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Product
                    </button>

                </div>
            </form>
        </div>
    );
};

export default AllCategorys;