import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AddIncome = () => {
  const history = useNavigate();
  const [clientName, setClientName] = useState('');
  const [finalizedFee, setFinalizedFee] = useState(0);
  const [feePaid, setFeePaid] = useState(0);

  async function submit(e) {
    e.preventDefault();
    const feeToBePaid = finalizedFee - feePaid;
    axios.post('http://localhost:3001/addincome', {email:user_Emai_l,password:user_Passwor_d,ClientName:clientName,FinalizedFee:finalizedFee,FeePaid:feePaid,FeeToBePaid:feeToBePaid})
        .then((result) => {
            console.log(result);
            if (result.data === "Account created") {
                history("/layout2/income");
                alert("Income added");
            } else if (result.data === "Already have an account") {
                alert("Income already exits");
                history("/layout2/income");
            }
        })
        .catch(error => console.log(error));
}

  return (
    <div className='text-black w-full mr-2 ml-2'>
      <div className='w-full py-6 bg-[#9BA4B5] rounded-md md:text-[12px] mt-4 p-4'>
        <h2 className='sm:text-md md:text-2xl font-bold text-[#212A3E] mb-4'>Add Income</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='mb-4 sm:text-sm md:text-xl'>
            <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Client Name:</label>
            <input
              type='text'
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Finalized Fee:</label>
            <input
              type='number'
              value={finalizedFee}
              onChange={(e) => setFinalizedFee(e.target.value)}
              className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Fee Paid:</label>
            <input
              type='number'
              value={feePaid}
              onChange={(e) => setFeePaid(e.target.value)}
              className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
            />
          </div>
          {/* <div className='mb-4'>
            <label className='text-white text-base sm:text-sm md:text-xl'>Fee To Be Paid:</label>
            <input
              type='number'
              value={feeToBePaid}
              onChange={(e) => setFeeToBePaid(e.target.value)}
              className='border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full sm:text-sm md:text-xl outline-none'
            />
          </div> */}
        </div>
        <input
        value = "Add Income"
          type = "submit"
          onClick={submit}
          className='bg-[#3498db] text-white rounded-md sm:w-27 sm:p-2 sm:mt-2 w-35 p-3 mt-5 text-base hover:bg-[#2e84b3d1] mx-auto block'
        >
        </input>
      </div>
    </div>
  );
};

export default AddIncome;
