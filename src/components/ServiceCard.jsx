import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="group flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:bg-coral-red hover:text-slate-50 transition-all ">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full group-hover:bg-white group-hover:text-coral-red">
        <img src={imgURL} alt="" className="text-white" />
      </div>
      <h3 className="text-3xl font-bold my-2">{label}</h3>
      <p className="font-montserrat text-slate-gray text-lg leading-7 group-hover:text-white">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
