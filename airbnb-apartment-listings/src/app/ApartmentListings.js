import React from "react";
import Apartment from "./Apartment";

export const ApartmentListings = ({ apartments,onViewDetails /*navigate*/ }) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {apartments.length > 0 ? (apartments.map((apartment) => (
        <Apartment key={apartment.id} apartment={apartment} /*navigate={navigate}*/ onViewDetails={onViewDetails}/>
      ))) : (
        <p className="text-center text-gray-500 col-span-full mt-10">No apartments available for the selected dates.</p>
      )}
    </div>
  );
};

//className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
