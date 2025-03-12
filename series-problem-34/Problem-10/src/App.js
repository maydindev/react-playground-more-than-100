import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

// Card'a tek tek proplar ekleyin, ardından bunları kullanmak için her birini yeniden yapılandırın
function Card({ src, username, time, description }) {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="bg-white sm:rounded-lg sm:shadow">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={src} alt="" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900">
                <a href="#" className="hover:underline">
                  {username}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <a href="#" className="hover:underline">
                  {time}
                </a>
              </p>
            </div>
            <CardButton option="Açık opsiyonlar" />
          </div>
        </div>
        <div className="px-4 pb-5 opacity-25 sm:p-6 sm:pt-0">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function CardButton({ option }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-shrink-0 self-center">
      <div /*as="div"*/ className="relative inline-block text-left">
        <div>
          <div
            className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600"
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          >
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <span className="sr-only"></span>
        {isMenuOpen && (
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "white",
              position: "absolute",
              top: "40px", // Üç nokta ikonunun altına yerleştirmek için
              right: "0", // Sağ kenara hizalamak için
              width: "200px", // Menünün genişliği
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Hafif gölge efekti
              borderRadius: "8px", // Köşeleri yuvarlama
              zIndex: 10, // Menülerin üzerine çıkması için
            }}
          >
            <ul>
              <li>{option}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-gray-100">
      <Card
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        username="Chelsea Hagon"
        time="9 Aralık saat 11:43"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam
            quam, quidem vel assumenda repellat inventore sint nesciunt, ullam
            asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda
            distinctio veniam quam tempora modi aperiam nemo voluptate
            reprehenderit quidem, nisi vero est."
      />
      <Card
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        username="Eda Korona"
        time="31 Temmuz saat 19:00"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam
            quam, quidem vel assumenda repellat inventore sint nesciunt, ullam
            asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda
            distinctio veniam quam tempora modi aperiam nemo voluptate
            reprehenderit quidem, nisi vero est."
      />
    </div>
  );
}
