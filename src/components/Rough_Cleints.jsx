import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import axios from 'axios';
import Loader from './Loader';

const Clients = () => {
  const [clientList, setClientList] = useState([]);
  const [entries, setEntries] = useState(10);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Define the API endpoint and make the axios request
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/client', { email: user_Emai_l, password: user_Passwor_d });
        console.log("my ref\n", response);
        if (response.data.oSy === 'Data') {
          setClientList(response.data.Arr);
        }
        setLoad(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setLoad(true);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className='text-black w-full'>
      {load ? (
        <>
          <div className='flex items-center justify-between bg-gray-800 p-4'>
            {/* ... (rest of your code) */}
            <div className="flex items-center space-x-2">
              <Link to="/layout2/addclient">
                <button className='bg-[#3498db] text-white rounded-md w-20 sm:w-32  p-2 font-medium hover:bg-[#2e84b3d1] ml-2 mr-2 sm:mr-0 mt-2'>
                  <span className="flex items-center space-x-2">
                    <BsFillPersonPlusFill size={24} className='text-white' />
                    Add Client
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white">Show entries:</span>
              <select
                value={entries}
                onChange={(e) => setEntries(e.target.value)}
                className='border rounded-md px-2 text-black bg-whhite'
              >
                <option className="text-black" value={10}>
                  10
                </option>
                <option className="text-black" value={50}>
                  50
                </option>
                <option className="text-black" value={100}>
                  100
                </option>
              </select>
            </div>
          </div>
          <div className='px-4'>
            <table className="w-full mt-4 border-collapse border border-gray-800 ">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="border border-gray-800 px-4 py-2">No</th>
                  <th className="border border-gray-800 px-4 py-2">Client Name</th>
                  <th className="border border-gray-800 px-4 py-2">Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {clientList.map((client, index) => (
                  <tr key={client.id} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-200'}>
                    <td className="border border-gray-800 px-4 py-2">{index + 1}</td>
                    <td className="border border-gray-800 px-4 py-2">{client.clientName}</td>
                    <td className="border border-gray-800 px-4 py-2">{client.MobileNumber}</td>
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

export default Clients;
