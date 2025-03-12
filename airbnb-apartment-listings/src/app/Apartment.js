import React, { useEffect } from "react";

const Apartment = ({ apartment,onViewDetails/*navigate*/ }) => {
  const { id, title, image, description, price,availableDate } = apartment;

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-64 h-48 object-cover p-2"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-bold mt-4">${price} / Night</p>
        <p className="text-sm text-gray-500 mt-2">Available on: {availableDate}</p>
        <button className="mt-4 w-32 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600" 
        //onClick={() => navigate(`/apartment/${id}`)}
        onClick={() => onViewDetails(id)}
        >View Details</button>
      </div>
    </div>
  );
};

export default Apartment;
