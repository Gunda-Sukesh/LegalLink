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
        const response = await axios.post('http://localhost:3001/cases', { email:user_Emai_l, password:user_Passwor_d });
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
            <Link to="/layout2/addcases">
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

          <div className='w-full mt-4 overflow-x-auto px-4'>
            <table className='w-full border-collapse border border-gray-400'>
              <thead>
                <tr className='bg-gray-700 text-white'>
                  <th className='border border-gray-400 px-4 py-2'>No</th>
                  <th className='border border-gray-400 px-4 py-2'>Client Name</th>
                  <th className='border border-gray-400 px-4 py-2'>Case Detail</th>
                  <th className='border border-gray-400 px-4 py-2'>Court Detail</th>
                  <th className='border border-gray-400 px-4 py-2'>Petitioner vs Respondent</th>
                  <th className='border border-gray-400 px-4 py-2'>Sections</th>
                  <th className='border border-gray-400 px-4 py-2'>Status</th>
                </tr>
              </thead>
              <tbody>
                {caseList.map((caseItem, index) => (
                  <tr key={caseItem.id} className={index % 2 === 0 ? 'bg-gray-200 text-black' : 'text-black bg-gray-200'}>
                    <td className='border border-gray-400 px-4 py-2'>{index + 1}</td>
                    <td className='border border-gray-400 px-4 py-2'>{caseItem.ClientName}</td>
                    <td className='border border-gray-400 px-4 py-2'>{caseItem.CaseDetail}</td>
                    <td className='border border-gray-400 px-4 py-2'>{caseItem.CourtDetail}</td>
                    <td className='border border-gray-400 px-4 py-2'>{caseItem.PetitionervsRespondent}</td>
                    <td className='border border-gray-400 px-4 py-2'>{caseItem.Sections}</td>
                    <td className='border border-gray-400 px-4 py-2'>{caseItem.Status}</td>
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

export default Cases;
