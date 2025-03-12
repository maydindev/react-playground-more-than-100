"use client";
import Image from "next/image";
import { ApartmentListings } from "./ApartmentListings";
import apartments from "./apartments.json";
import DatePicker from "./DatePicker";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
//npm install react-router-dom
//Error: useNavigate() may be used only in the context of a <Router> component.
//Bu hata, useNavigate() fonksiyonunun yalnızca bir React Router Router bileşeninin bağlamında kullanılabileceğini belirtir. Eğer Next.js kullanıyorsanız ve useNavigate() ile yönlendirme yapmaya çalışıyorsanız, bu hata alırsınız, çünkü useNavigate() React Router'a özgüdür, ancak Next.js kendi yönlendirme sistemine sahiptir. Next.js'te useNavigate() gibi bir yapı kullanmak yerine, Next.js'in kendi useRouter hook'u kullanılır. Bu hook, yönlendirmeler ve dinamik rotalar için kullanılır.

//Error: NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted 
//import { useRouter } from "next/router";
//Çözümü; yukarıdaki linkte yazdığı şekilde sonundaki router'ı navigation olarak değiştirdim.


export default function Home() {
  const [firstDate, setFirstDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [filteredApartments, setFilteredApartments] = useState(apartments);
  //const navigate = useNavigate()
  const router = useRouter()

  useEffect(() => {
    if (!firstDate || !lastDate) {
      setFilteredApartments(apartments);
      return;
    }

    const filtered = apartments.filter((apartment) => {
      const availableDate = new Date(apartment.availableDate);
      return (
        new Date(firstDate) <= availableDate &&
        new Date(lastDate) >= availableDate
      );
    });
    setFilteredApartments(filtered);
  }, [firstDate, lastDate]); 

  const handleViewDetails = (id) => {
    router.push(`/${id}`)
  }

  /*
  const handleFilterDate = () => {
    if (!firstDate || !lastDate) return apartments;

    return apartments.filter((apartment) => {
      const availableDate = new Date(apartment.availableDate);
      console.log(availableDate);
      return (
        new Date(firstDate) <= availableDate &&
        new Date(lastDate) >= availableDate
      );
    });
  };

  const filteredApartments = handleFilterDate();
  */

  const handleClickFirstDate = (date) => {
    setFirstDate(date);
  };

  const handleClickLastDate = (date) => {
    setLastDate(date);
  };

  /*
const startDate = new Date(2024, 8, 1);  
const endDate = new Date(2024, 11, 31);  

const randomDate = randomDate(startDate, endDate);
console.log(randomDate);
*/

  return (
    <>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl text-teal-500 font-bold text-center mb-8">
          Project 10 AirBnB
        </h2>
        <DatePicker
          firstDate={firstDate}
          onClickFirstDate={handleClickFirstDate}
          lastDate={lastDate}
          onClickLastDate={handleClickLastDate}
        />
        <ApartmentListings apartments={filteredApartments} onViewDetails={handleViewDetails} /*navigate={navigate}*//>
      </div>

    </>
  );
}
/*
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartment/:id" element={<ApartmentDetails />} />
        </Routes>
      </Router>*/
