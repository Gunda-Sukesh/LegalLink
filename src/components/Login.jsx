import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then((result) => {
                console.log(result);
                if (result.data === "Account Found") {
                    user_Emai_l = email;
                    user_Passwor_d = password;
                    history("/layout2/dashboard", { state: { email: email, password: password } });
                    alert("Successfully logged in");

                } else if (result.data === "wrong details") {
                    alert("Email and password don't match");
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='w-full h-screen flex flex-col text-white bg-white'>
            <div className="md:flex">
                <div className="w-full md:w-1/2 h-screen flex justify-center items-center">
                    <div className='mb-10 text-center'>
                        <h1 className='text-[#3498db] text-4xl md:text-5xl font-bold mb-4'>LegalLink.</h1>
                        <img
                            src="src\assets\OIG.jpeg"
                            alt="Your Image"
                            className="w-72 md:w-96 h-72 md:h-96 object-cover rounded-lg shadow-2xl mx-auto"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-screen flex justify-center items-center" >
                    <div className='bg-[#3498db] p-4 flex flex-col rounded-md w-full md:w-[400px]'>
                        <form onSubmit={submit}>
                            <div className='flex flex-row justify-between border-b-2 border-black m-2'>
                                <Link to="/signup">
                                    <div className='p-2'>
                                        <h1 className='p-2 lg:text-3xl md:text-2xl text-xl text-white font-medium cursor-pointer'>Log In</h1>
                                    </div>
                                </Link>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-white my-2 font-medium md:text-2xl text-xl'>Email:</label>
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} className='text-black outline-none p-2 rounded-md w-full' placeholder='User-Email' required></input>
                                <label className='text-white my-2 font-medium md:text-2xl text-xl'>Password:</label>
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} className='text-black outline-none p-2 rounded-md w-full' placeholder='User-Password' required></input>
                                <input type='submit' className='text-white bg-black w-[150px] p-2 rounded-md mx-auto my-4' value='Log in'></input>
                                <p className='text-white text-center'>If you are a new user, go to <span className='underline cursor-pointer'><Link to="/signup">Sign up</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
