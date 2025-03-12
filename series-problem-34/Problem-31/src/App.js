import Image from "next/image";
import { createContext, useContext, useState } from "react";

//https://react.dev/reference/react/createContext
const SaleContext = createContext(null);

export default function App() {
  const [discount, setDiscount] = useState(40);

  return (
    <SaleContext.Provider value={discount}>
      <Hero />
    </SaleContext.Provider>
  );
}

function Hero() {
  const value = useContext(SaleContext);

  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-full-width.jpg"
          alt="Office Supplies"
          className="h-full w-full object-cover object-center"
          width={500}
          height={500}
        />
      </div>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Her şey %{value} indirimli olsun
        </h1>
        <p className="mt-4 text-xl text-white">
          Yaz sürümümüzden seçenekler hala varken, en son gelişmelere göz atın
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Yeni Gelenleri Satın Alın
        </a>
      </div>
    </div>
  );
}
