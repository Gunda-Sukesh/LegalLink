import React, { useState, useEffect } from 'react';
import { ImHammer2 } from 'react-icons/Im';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const Cases = () => {
  const [caseList, setCaseList] = useState([]);
  const [entries, setEntries] = useState(10);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/cases', { email: user_Emai_l, password: user_Passwor_d });
        if (response.data.oSy === 'Data') {
          setCaseList(response.data.Arr);
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
          <div className='flex flex-col md:flex-row items-center justify-between bg-gray-800 p-4'>
            <Link to='/layout2/addcases'>
              <button className='bg-[#3498db] text-white rounded-md p-2 font-medium hover:bg-[#2e84b3d1] flex items-center space-x-2 mb-2 md:mb-0'>
                <ImHammer2 size={24} className='text-white' />
                Add Case
              </button>
            </Link>
            <div className='flex items-center space-x-2'>
              <span>Show entries:</span>
              <select
                value={entries}
                onChange={(e) => setEntries(e.target.value)}
                className='border rounded-md px-2 text-black bg-white'
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
            {caseList.map((caseItem, index) => (
              <div
                key={caseItem.id || index}
                className={`bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 p-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105`}
              >
                <p className='font-bold text-lg mb-2 uppercase'>{caseItem.ClientName}</p>
                <p className='capitalize'>{caseItem.CaseDetail}</p>
                <p className='capitalize'>{caseItem.CourtDetail}</p>
                <p className='capitalize'>{caseItem.PetitionervsRespondent}</p>
                <p className='capitalize'>{caseItem.Sections}</p>
                <p className='capitalize'>{caseItem.Status}</p>
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

export default Cases;
