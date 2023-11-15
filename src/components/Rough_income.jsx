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
        const response = await axios.post('http://localhost:3001/income', { email:user_Emai_l, password:user_Passwor_d });
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
          <div className='px-4'>
          <table className='w-full mt-4 border-collapse border border-gray-400'>
            <thead>
              <tr className='bg-gray-700 text-white'>
                <th className='border border-gray-400 px-4 py-2'>No</th>
                <th className='border border-gray-400 px-4 py-2'>Client Name</th>
                <th className='border border-gray-400 px-4 py-2'>Finalized Fee</th>
                <th className='border border-gray-400 px-4 py-2'>Fee Paid</th>
                <th className='border border-gray-400 px-4 py-2'>Fee To Be Paid</th>
              </tr>
            </thead>
            <tbody>
              {incomeList.map((income, index) => (
                <tr key={income.id} className={index % 2 === 0 ? 'bg-gray-200 text-black' : 'text-black'}>
                  <td className='border border-gray-400 px-4 py-2'>{index + 1}</td>
                  <td className='border border-gray-400 px-4 py-2'>{income.ClientName}</td>
                  <td className='border border-gray-400 px-4 py-2'>{income.FinalizedFee}</td>
                  <td className='border border-gray-400 px-4 py-2'>{income.FeePaid}</td>
                  <td className='border border-gray-400 px-4 py-2'>{income.FeeToBePaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Income;
