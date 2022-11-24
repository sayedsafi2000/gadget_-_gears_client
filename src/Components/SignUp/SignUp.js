import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import { Link } from "react-router-dom";
const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const role = form.role.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateSignInUser(name,role)
                console.log(user);
                fetch("http://localhost:5000/users",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(user)
                })
                form.reset();
            })
            .catch(err => console.error(err));
    }
    const updateSignInUser = (name, role) => {
        const profile = { displayName: name, role: role }
        updateUser(profile)
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <section class="bg-gray-50 dark:bg-gray-900 flex justify-center">

            <div className='w-1/2 '>
                <img className='w-[600px]' src="signup.png" alt="" />
            </div>
            <div class="w-1/2 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form onSubmit={handleSignup} class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Full Name" required="" />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                                    Select Role
                                </label>
                                <select name='role' className="select select-bordered w-full  mb-5">
                                    <option>Buyer</option>
                                    <option>Seller</option>

                                </select>
                            </div>
                            <button type="submit" class="w-full text-blaxk btn btn-ghonst">Create an account</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;