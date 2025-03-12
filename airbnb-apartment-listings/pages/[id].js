import { useRouter } from "next/router";
import React from "react";
//import { useParams } from 'react-router-dom';
import apartments from "../src/app/apartments.json";

const ApartmentDetails = () => {
  //const {id} = useParams();

  const router = useRouter();
  const { id } = router.query;

  const apartment = apartments.find((item) => item.id === parseInt(id));

  if (!apartment) {
    return <p>Apartment not found.</p>;
  }

  console.log(id);

  return (
    <div>
      {id}

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">{apartment.title}</h1>
        <img
          src={apartment.image}
          alt={apartment.title}
          className="w-full h-auto mb-4"
        />
        <p className="text-lg text-gray-600">{apartment.description}</p>
        <p className="text-xl font-bold mt-4">${apartment.price} / Night</p>
        <p className="text-sm text-gray-500 mt-2">
          Available on: {apartment.availableDate}
        </p>
      </div>
    </div>
  );
};

export default ApartmentDetails;
