import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Account created') {
          user_Emai_l = email;
          user_Passwor_d = password;
          history("/layout2/dashboard", { state: { name: name, email: email, password: password } });
          alert("Successfully logged in");
        } else if (result.data === "Already have an account") {
          alert("An account already exists with this email address");
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='w-full h-screen flex flex-col text-white bg-white'>
      <div className="md:flex">
        <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-[#3498db] text-4xl md:text-5xl font-bold mb-4">LegalLink.</h1>
          <img
            src="src\assets\OIG (2).jpeg" 
            alt="LegalLink"
            className="w-72 md:w-96 h-72 md:h-96 object-cover rounded-lg shadow-2xl mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center">
          <div className='bg-[#3498db] p-4 flex flex-col rounded-md w-full md:w-[400px]'>
            <form onSubmit={submit}>
              <div className='flex flex-row justify-between border-b-2 border-black m-2'>
                <div className='p-2'>
                  <h1 className='p-2 text-xl md:text-2xl lg:text-3xl font-medium text-white rounded-md cursor-pointer'>Sign up</h1>
                </div>
                <Link to="/login">
                  <div className='p-2'>
                    <h1 className='p-2 text-xl md:text-2xl lg:text-3xl font-medium text-white cursor-pointer'>Log in</h1>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col'>
                <label className='text-white my-2 text-xl md:text-2xl font-medium'>Name:</label>
                <input type="text" onChange={(e) => { setName(e.target.value) }} className='text-black outline-none p-2 rounded-md w-full md:w-[370px]' placeholder='User-Name' required></input>
                <label className='text-white my-2 text-xl md:text-2xl font-medium'>Email:</label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} className='text-black outline-none p-2 rounded-md w-full md:w-[370px]' placeholder='User-Email' required></input>
                <label className='text-white my-2 text-xl md:text-2xl font-medium'>Password:</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} className='text-black outline-none p-2 rounded-md w-full md:w-[370px]' placeholder='User-Password' required></input>
                <input type='submit' className='text-white bg-black w-full md:w-[200px] p-2 rounded-md mx-auto my-4' value="Sign up"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
