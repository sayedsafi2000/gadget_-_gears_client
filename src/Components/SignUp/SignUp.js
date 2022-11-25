import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
const SignUp = () => {
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const [signUpError, setsignUpError] = useState("")
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const role = form.role.value;
        const password = form.password.value;
        const usersInfo = { email, name, role }
        console.log(usersInfo)
        setsignUpError("");
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateSignInUser(name)
                console.log(user);
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(usersInfo)
                })
                form.reset();
                navigate("/");
            })
            .catch(err => {
                setsignUpError(err.message);
                console.error(err)
            });
    };
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const email = user?.email
                const name = user?.displayName
                console.log(user);
                const usersInfo = { name,email}
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(usersInfo)
                })
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }
    const updateSignInUser = (name) => {
        const profile = { displayName: name,}
        updateUser(profile)
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 none lg:flex justify-center">

            <div className='w-full lg:w-1/2 '>
                <img className='w-full lg:w-[600px]' src="signup.png" alt="" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-0 mx-auto  lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-0 lg:p-6 space-y-4 md:space-y-6 ">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form onSubmit={handleSignup} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Full Name" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="role">
                                    Select Role
                                </label>
                                <select name='role' className="select select-bordered w-full  mb-5">
                                    <option>Buyer</option>
                                    <option>Seller</option>

                                </select>
                            </div>
                            <button type="submit" className="w-full text-blaxk btn btn-ghonst">Create an account</button>
                            <p className="text-red-600">{signUpError}</p>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                        <button onClick={handleGoogleSignin} className="btn btn-ghost  mx-auto w-full">Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;