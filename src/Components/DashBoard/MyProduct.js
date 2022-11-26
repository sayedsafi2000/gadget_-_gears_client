import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/seller/product/${user?.email}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [user?.email])

    const handleDelete = id => {
        fetch(`http://localhost:5000/product/seller/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                const remainingProduct = product.filter(prod =>prod._id !==id)
                setProduct(remainingProduct);
            }
            
        })
    }

    const handleAdvertise =id => {
        console.log(id)
        fetch(`http://localhost:5000/products/advertise/${id}`,{
            method:"PATCH",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sales Status</th>
                            <th>Delete</th>
                            <th>Available Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((pro, i) => <tr key={pro?._id}>
                                <th>{i + 1}</th>
                                <td>{pro?.title}</td>
                                <td>{pro?.price}</td>
                                <td>Sold</td>
                                <td><button onClick={()=>handleDelete(pro?._id)} className='btn btn-xs  bg-red-500' >Delete</button></td>
                                <td> <button onClick={() => handleAdvertise(pro?._id)} className='btn btn-xs  bg-blue-500' >Advertisement</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;