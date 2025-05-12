import React from 'react';
import { Link } from 'react-router';

const SubsBanner = ({ data }) => {
  const { id, name, description, logo, thumbnail} = data;
  const isEven = id % 2 === 0;

  return (
    <div className=" py-10 px-5">
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between ${
          isEven ? 'md:flex-row-reverse' : ''
        } bg-white shadow-lg rounded-lg overflow-hidden`}
      >
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img src={thumbnail} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4">{name}</h2>
          <p className="text-gray-700 text-lg">{description}</p>
          <Link to={`/viewPlan/${id}`} className='btn mt-3 bg-[#101234]'><img className='w-6' src={logo} alt="" /> View Plans</Link>
        </div>
      </div>
    </div>
  );
};

export default SubsBanner;
