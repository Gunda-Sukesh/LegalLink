import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 p-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              About LegalLink.
            </h1>
            <p className="text-base md:text-lg font-medium mb-4">
              <span className="text-[#3498db] text-2xl md:text-3xl font-semibold">
                At LegalLink.
              </span>, we're on a mission to revolutionize the legal industry. Our team of dedicated legal professionals and tech-savvy experts has come together to create a cutting-edge case management solution. We empower lawyers and law firms by streamlining case management, boosting productivity, and ensuring justice is served. Trust us to be your partner in the complex world of law.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="src\assets\OIG (1).jpeg"
              alt="Your Image"
              className="w-full md:w-96 h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="text-white font-medium p-2 bg-[#3498db] w-[150px] rounded-md hover:bg-[#2e84b3d1] md:mt-20">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
