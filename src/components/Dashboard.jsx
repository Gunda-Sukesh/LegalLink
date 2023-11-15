import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { HiUserGroup } from 'react-icons/hi'
import { BiSolidNotepad } from 'react-icons/Bi'
import { AiFillDollarCircle } from 'react-icons/Ai'
import { HiMiniCurrencyRupee } from 'react-icons/hi2'
import axios from 'axios'
import Loader from './Loader'
const Dashboard = () => {
    const [clients, setClients] = useState(0)
    const [cases, setCases] = useState(0)
    const [income, setIncome] = useState(0)
    const [load, setLoad] = useState(false);

    // const slides = [
    //     {
    //         url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd090jVgLYiNAbxIq9Fb8cBXXvwseDtf4RDg&usqp=CAU"
    //     },{
    //         url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xza3ZhdgNtzl1LB5fRfA1m1xosCpYNqzrQ&usqp=CAU"
    //     },{
    //         url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNKMr94cgHg-cJ-Ngp3wvUqogDT4eA2bTQQ&usqp=CAU"
    //     },{
    //         url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXYmdm_EPXnW1u-6dcDdBWbUftuBtoCoq_Q&usqp=CAU"
    //     },{
    //         url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBz-lK5d0jBYM-HHHhFoOQybfoMMTO4fHOwg&usqp=CAU"
    //     }
    // ]

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:3001/dashboard', { email: user_Emai_l, password: user_Passwor_d });
                console.log("my ref\n", response);
                if (response.data.oSy === 'Data') {
                    console.log(response.data)
                    setClients(response.data.Cl);
                    setCases(response.data.Ca);
                    setIncome(response.data.In);
                }
                setLoad(true);
            } catch (error) {
                console.error('Error fetching data:', error);
            
            }
        };
        fetchData();
    }, []); 


    return (
        <div className='text-white w-full h-screen ' >
            {load ? (
                <>
                    <p className='p-4 text-xl md:text-2xl lg:text-3xl text-[#212A3E]'>Dashboard</p>
                    <div className='flex flex-col md:flex-row flex-wrap shadow-2xl'>
                        <div className='w-48 h-28 md:w-52 md:h-32 bg-[#F1F6F9] ml-4 my-4 md:mx-10 md:my-4 rounded-md flex justify-between items-center shadow-2xl'>
                            <div className='pl-2 text-[#212A3E]'>
                                <p className='text-3xl  '>{clients}</p>
                                <p className='text-[#212A3E] text-2xl font-bold'>Clients</p>
                                <p className='text-[#212A3E]'>Total clients</p>
                            </div>
                            <div className='pr-2 text-[#212A3E]'>
                                <HiUserGroup size={70}></HiUserGroup>
                            </div>
                        </div>
                        <div className='w-48 h-28 md:w-52 md:h-32 bg-[#F1F6F9] ml-4 my-4 md:mx-10 md:my-4 rounded-md flex justify-between items-center shadow-2xl'>
                            <div className='pl-2'>
                                <p className='text-3xl text-[#212A3E]'>{cases}</p>
                                <p className='text-[#212A3E] text-2xl font-bold'>Cases</p>
                                <p className='text-[#212A3E]'>Total cases</p>
                            </div>
                            <div className='pr-2 text-[#212A3E]'>
                                <BiSolidNotepad size={70}></BiSolidNotepad>
                            </div>
                        </div>
                        <div className='w-48 h-28 md:w-52 md:h-32 bg-[#F1F6F9] ml-4 my-4 md:mx-10 md:my-4 rounded-md flex justify-between items-center shadow-2xl'>
                            <div className='pl-2 text-[#212A3E]'>
                                <p className='text-3xl text-[#212A3E]'>{income}</p>
                                <p className='text-[#212A3E] text-2xl font-bold'>Income</p>
                                <p className='text-[#212A3E]'>Total income</p>
                            </div>
                            <div className='pr-2 text-[#212A3E]'>
                                <HiMiniCurrencyRupee size={70}></HiMiniCurrencyRupee>
                            </div>
                        </div>
                    </div>
                    {/* <div className='max-w-[600px] h-[380px] w-full m-auto py-16 px-4 relative hidden md:block'>
                        <div style={{backgroundImage:`url(${slides[3].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
                    </div> */}
                </>
            )
                :
                (<Loader />)
            }
        </div>
    )
}

export default Dashboard