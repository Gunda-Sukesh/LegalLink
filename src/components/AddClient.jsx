import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const AddClient = () => {
    const history = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState(0);

    async function submit(e) {
        e.preventDefault();
        const name = firstName + " " + middleName + " " + lastName;
        console.log("for ", user_Emai_l, user_Passwor_d, name, mobile, "my ref");
        axios.post('http://localhost:3001/addclient', { email:user_Emai_l, password:user_Passwor_d ,name,mobile })
            .then((result) => {
                console.log(result);
                if (result.data === "Account created") {
                    history("/layout2/clients");
                    alert("Client added");

                } else if (result.data === "Already have an account") {
                    alert("Client already exits");
                    history("/layout2/clients");
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className=' w-full mr-2 ml-2 text-[#212A3E]'>
            <form onSubmit={submit}>
            <div className='w-full py-6 bg-[#9BA4B5] rounded-md md:text-[12px] mt-4 p-4 text-[#212A3E]'>
                <h2 className='sm:text-md md:text-2xl font-bold text-[#212A3E] mb-4'>Add Client</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='mb-4 sm:text-sm md:text-xl'>
                        <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>First Name:</label>
                        <input
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Middle Name:</label>
                        <input
                            type='text'
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                            className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Last Name:</label>
                        <input
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='text-[#212A3E] text-base sm:text-sm md:text-xl'>Age:</label>
                        <input
                            type='number'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className='border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full sm:text-sm md:text-xl outline-none'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Gender:</label>
                        <input
                            type='text'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Address:</label>
                        <input
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Mobile Number:</label>
                        <input
                            type='text'
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
                            required
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    value="Add Client"
                    className='bg-[#3498db] text-white rounded-md sm:w-27 sm:p-2 sm:mt-2 w-35 p-3 mt-5 text-base hover:bg-[#2e84b3d1] mx-auto block'
                >
                </input>
            </div>
            </form>
        </div>
    );
};

export default AddClient;
