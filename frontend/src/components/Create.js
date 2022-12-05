import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Create() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const postData = () => {
        axios.post("https://101348701-comp3123-assignment2-backend.vercel.app/api/emp/employees", {
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            salary: salary,
        },
        ).then((response) => {
            console.log(response);
            setErrorMessage("")
            setSuccessMessage("Employee has been successfully added")
        }).catch(error => {
            setSuccessMessage("")
            setErrorMessage(error.response.data.message)
        });
    }


    return (
        <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="relative py-3 sm:w-96 mx-auto text-center">
                <span class="text-2xl font-light ">Add new employee</span>
                <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div class="h-2 bg-orange-400 rounded-t-md"></div>
                    <div class="px-8 py-6 ">
                        <label class="block font-semibold"> First Name </label>
                        <input value={first_name} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Last Name </label>
                        <input value={last_name} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Gender</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} id="countries" class=" rounded-md border border-gray-200 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1  block w-full p-2.5 ">
                            <option selected>Choose a gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                        <label class="block mt-3 font-semibold"> Salary</label>
                        <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" placeholder="Salary" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <p className="text-green-400">{successMessage}</p>
                        <p className="text-red-400">{errorMessage}</p>
                        <div class="flex justify-between items-baseline">
                            <button onClick={postData} type="submit" class="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 ">Add</button>
                            <Link to='/view'>
                                <button  class="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 ">Back</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
