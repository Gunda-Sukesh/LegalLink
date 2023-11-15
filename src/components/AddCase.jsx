import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const AddCase = () => {
  const history = useNavigate();
  const [clientName, setClientName] = useState('');
  const [caseDetail, setCaseDetail] = useState('');
  const [courtDetail, setCourtDetail] = useState('');
  const [petitionerVsRespondent, setPetitionerVsRespondent] = useState('');
  const [sections, setSections] = useState('');
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/addcase', {email:user_Emai_l, password:user_Passwor_d ,clientName:clientName,caseDetail:caseDetail,courtDetail:courtDetail,petitionerVsRespondent:petitionerVsRespondent,Sections:sections,Status:status})
        .then((result) => {
            console.log(result);
            if (result.data === "Account created") {
                history("/layout2/cases");
                alert("Case added");
            } else if (result.data === "Already have an account") {
                alert("Case already exits");
                history("/layout2/cases");
            }
        })
        .catch(error => console.log(error));
}

  return (
    <div className='text-black w-full mr-2 ml-2'>
      <div className='w-full py-6 bg-[#9BA4B5] rounded-md md:text-[12px] mt-4 p-4'>
        <h2 className='sm:text-md md:text-2xl font-bold text-[#212A3E] mb-4'>Add Case</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='mb-4 sm:text-sm  md:text-xl'>
            <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Client Name:</label>
            <input
              type='text'
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-black w-full outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Case Detail:</label>
            <input
              type='text'
              value={caseDetail}
              onChange={(e) => setCaseDetail(e.target.value)}
              className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-[#212A3E] w-full outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Court Detail:</label>
            <input
              type='text'
              value={courtDetail}
              onChange={(e) => setCourtDetail(e.target.value)}
              className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-[#212A3E] w-full outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='text-[#212A3E] text-base sm:text-sm md:text-xl'>Petitioner vs Respondent:</label>
            <input
              type='text'
              value={petitionerVsRespondent}
              onChange={(e) => setPetitionerVsRespondent(e.target.value)}
              className='border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-[#212A3E] w-full sm:text-sm md:text-xl outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Sections:</label>
            <input
              type='text'
              value={sections}
              onChange={(e) => setSections(e.target.value)}
              className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-[#212A3E] w-full outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='sm:text-sm md:text-xl text-[#212A3E] text-base'>Status:</label>
            <input
              type='text'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='sm:text-sm md:text-xl border rounded-md sm:px-2 sm:py-1 px-3 py-2 text-base text-[#212A3E] w-full outline-none'
            />
          </div>
        </div>
        
        <input
          type='submit'
          value={"Add Case"}
          onClick={submit}
          className='bg-[#3498db] text-white rounded-md sm:w-27 sm:p-2 sm:mt-2 w-35 p-3 mt-5 text-base hover:bg-[#2e84b3d1] mx-auto block'
        >
        </input>
      </div>
    </div>
  );
};

export default AddCase;
