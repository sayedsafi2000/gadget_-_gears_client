import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast"
import useTitle from '../../Hooks/useTitle';
const SellerUser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("https://gadget-and-gears-server.vercel.app/users");
            const data = await res.json();
            return data;
        }
    })
    const handleMakeVerifi = id => {
        fetch(`https://gadget-and-gears-server.vercel.app/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success("Make user verified successfull");
                refetch();
            })
    }
    const handleDelete = id => {
        fetch(`https://gadget-and-gears-server.vercel.app/users/admin/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User deleted Successfully`)
                }
            })
    }
    useTitle("Seller-DashBoard")
    return (
        <div>
            <h2 className='text-xl my-6'>All buyer and seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Buyer/Seller</th>
                            <th>Delete</th>
                            <th>Make Verify User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={
                                user.userType === "Seller" ? user._id : ""
                            }>
                                {
                                    user.userType === "Seller" && <>
                                        <td>{user.userType === "Seller" ? user.name : ""}</td>
                                        <td>{user.userType === "Seller" ? user.email : ""}</td>
                                        <td>{
                                            user.userType === "Seller" ? user.userType : ""}</td>
                                        {
                                            user.userType === "Seller" ? <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs  bg-red-500' >Delete</button></td> : ""
                                        }
                                        {
                                            user.userType === "Seller" ? <td>{user?.verify !== "verified" && <button onClick={() => handleMakeVerifi(user._id)} className='btn btn-xs  bg-blue-500' >Verify</button>}</td> : ""
                                        }
                                    </>
                                }

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellerUser;