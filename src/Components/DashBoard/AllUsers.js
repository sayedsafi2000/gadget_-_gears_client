import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast"
const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data;
        }
    })
    const handleMakeVerifi = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Make user verified successfull");
                refetch();
            })
    }
    const handleDelete = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User deleted Successfully`)
                }
            })
    }
    return (
        <div>
            <h2 className='text-xl'>All buyer and seller</h2>
            <h2 className='text-yellow-800 font-bold my-4'>Empty role is also a buyer</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Buyer/Seller</th>
                            <th>Delete</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button onClick={()=>handleDelete(user._id)} className='btn btn-xs  bg-red-500' >Delete</button></td>
                                <td>{user?.verify !== "verified" && <button onClick={() => handleMakeVerifi(user._id)} className='btn btn-xs  bg-blue-500' >Verify</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;