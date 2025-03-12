"use client";
import React, { useRef, useState } from "react";
import axios from "axios";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const cityInputRef = useRef();

  const API_KEY = "fcc51ff545a1fa4ca1026254856fbce9";

  const fetchWeatherData = async (city) => {
    const weatherTranslations = {
      "clear sky": "Açık gökyüzü",
      "few clouds": "Az bulutlu",
      "scattered clouds": "Dağınık bulutlar",
      "broken clouds": "Parçalı bulutlar",
      "overcast clouds": "Kapalı bulutlar",
      "shower rain": "Sağanak yağış",
      rain: "Yağış",
      "light rain": "Hafif Yağış",
      thunderstorm: "Gökgürültülü fırtına",
      snow: "Kar",
      mist: "Sis",
      smoke: "Duman",
      haze: "Pus",
      sand: "Kum",
      dust: "Toz",
      fog: "Sis",
      ash: "Kül",
      squall: "Fırtına",
      tornado: "Kasırga",
    };

    const translateWeather = (englishDescription) => {
      return weatherTranslations[englishDescription] || englishDescription;
    };

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = response.data;
      setWeatherData({
        name: data.city.name,
        description: translateWeather(data.list[0].weather[0].description),
        currentTemp: data.list[0].main.temp.toFixed(0),
        feels_like: data.list[0].main.feels_like.toFixed(0),
        humidity: data.list[0].main.humidity,
        dayOfWeek: new Date().toLocaleDateString("tr-TR", { weekday: "long" }),
        time: new Date().toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
      setHourlyData(data.list.slice(0, 5)); // İlk 5 saatlik tahmini alıyoruz
    } catch (error) {
      console.error("Hava durumu verisi alınırken bir hata oluştu:", error);
    }
  };

  const handleGetWeather = () => {
    const city = cityInputRef.current.value;
    fetchWeatherData(city);
  };

  /*
  <p className="text-6xl font-bold my-4">{weatherData?.currentTemp}°C</p>
  */

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-red-300 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Project-8 Weather App
        </h1>
        <div className="flex items-center justify-center mb-4">
          <input
            ref={cityInputRef}
            className="border border-gray-300 rounded-lg py-2 px-4 mr-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="ŞEHİR GİRİNİZ"
          />
          <button
            onClick={handleGetWeather}
            className="bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            GİT
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">{weatherData?.name}</h2>
          <p className="text-gray-500">
            {weatherData?.dayOfWeek} {weatherData?.time}
          </p>
          <p className="m-3">
            <span className="text-6xl font-bold my-4">
              {weatherData?.currentTemp}
            </span>
            {weatherData && (
              <span className="text-lg font-medium ml-1 align-top ">°C</span>
            )}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span>{weatherData?.description}</span>
          </div>
          <p className="text-gray-500 text-2xl mt-2">
            {weatherData && <span>Hissedilen: {weatherData?.feels_like}</span>}
            {weatherData && (
              <span className="text-xs font-medium align-top">°C</span>
            )}
            {weatherData && (
              <span>
                {" | "} Nem: {weatherData?.humidity}
                {" % "}
              </span>
            )}
          </p>
        </div>
        {weatherData && <hr className="my-4 border-gray-200" />}
        <div>
          {hourlyData.map((hour, index) => (
            <div key={index} className="flex items-center justify-between my-2">
              <p className="text-gray-700 text-2xl">
                {new Date(hour.dt * 1000).toLocaleTimeString("tr-TR", {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>
              <img
                className="h-12 w-12"
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                alt="weather icon"
              />
              <p className="text-gray-700 text-2xl">
                <span>{Math.round(hour.main.temp_max)}</span>
                <span className="text-xs align-top">°C</span>
                {" - "}
                <span>{Math.round(hour.main.temp_min)}</span>
                <span className="text-xs align-top">°C</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
