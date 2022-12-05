import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const postData = () => {
        axios.post("https://101348701-comp3123-assignment2-backend.vercel.app/api/signup", {
            username: username,
            email: email,
            password: password,
        },
        ).then((response) => {
            console.log(response);
            setErrorMessage("")
            setSuccessMessage("Account has been registered successfully!")
        }).catch(error => {
            setErrorMessage(error.response.data.message)

        });
    }

    return (
        <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="relative py-3 sm:w-96 mx-auto text-center">
                <span class="text-2xl font-light ">Create new account</span>
                <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div class="h-2 bg-orange-400 rounded-t-md"></div>
                    <div class="px-8 py-6 ">
                        <label class="block font-semibold"> Username </label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Email </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <p className="text-green-400">{successMessage}</p>
                        <p className="text-red-400">{errorMessage}</p>
                        <div class="flex justify-between items-baseline">
                            <button onClick={postData} type="submit" class="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 ">Register</button>
                            <Link to='/'>
                                <button  class="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 ">Back</button>
                            </Link>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

