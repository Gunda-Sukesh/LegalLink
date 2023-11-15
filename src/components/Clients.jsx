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
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-black w-full">
      {load ? (
        <>
          <div className="flex items-center justify-between bg-gray-800 p-4">
            <div className="flex items-center space-x-2">
              <Link to="/layout2/addclient">
                <button className="bg-[#3498db] text-white rounded-md w-20 sm:w-32 p-2 font-medium hover:bg-[#2e84b3d1] ml-2 mr-2 sm:mr-0 mt-2">
                  <span className="flex items-center space-x-2">
                    <BsFillPersonPlusFill size={24} className="text-white" />
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
                className="border rounded-md px-2 text-black bg-whhite"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-4">
            {clientList.map((client, index) => (
              <div
                key={client.id  || index}
                className={`bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 p-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105`}
              >
                <p className="font-bold text-lg mb-2">{client.clientName}</p>
                <p className="text-gray-700">Mobile Number:<br/> {client.MobileNumber}</p>
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

export default Clients;
