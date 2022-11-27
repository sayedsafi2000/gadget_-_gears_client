import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast"
import useTitle from '../../Hooks/useTitle';
const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("https://gadget-and-gears-server.vercel.app/users");
            const data = await res.json();
            return data;
        }
    })
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
    useTitle("Buyers-Dashboard")
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                {
                                    user.userType === "Buyer" && <>

                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{
                                            user.userType || user.role}</td>
                                        <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs  bg-red-500' >Delete</button></td>
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

export default AllUsers;