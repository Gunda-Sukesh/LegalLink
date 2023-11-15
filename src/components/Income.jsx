import React, { useState, useEffect } from 'react';
import { HiMiniCurrencyRupee } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const Income = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [entries, setEntries] = useState(10);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/income', { email: user_Emai_l, password: user_Passwor_d });
        if (response.data.oSy === 'Data') {
          setIncomeList(response.data.Arr);
        }
        setLoad(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-white w-full'>
      {load ? (
        <>
          <div className='flex items-center justify-between bg-gray-800 p-4'>
            <Link to="/layout2/addincome">
              <button className='bg-[#3498db] text-white rounded-md p-2 font-medium hover:bg-[#2e84b3d1] flex items-center space-x-2'>
                <HiMiniCurrencyRupee size={24} className='text-white' />
                Add Income
              </button>
            </Link>
            <div className='flex items-center space-x-2'>
              <span>Show entries:</span>
              <select
                value={entries}
                onChange={(e) => setEntries(e.target.value)}
                className='border rounded-md px-2 text-black'
              >
                <option className='text-black' value={10}>
                  10
                </option>
                <option className='text-black' value={50}>
                  50
                </option>
                <option className='text-black' value={100}>
                  100
                </option>
              </select>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-4 text-[#212A3E]'>
            {incomeList.map((income, index) => (
              <div
                key={income.id || index}
                className={`bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 p-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105`}
              >
                <p className='font-bold text-lg mb-2 uppercase'>{income.ClientName}</p>
                <p>Finalized Fee: {income.FinalizedFee}</p>
                <p>Fee Paid: {income.FeePaid}</p>
                <p>Fee To Be Paid: {income.FeeToBePaid}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Income;
