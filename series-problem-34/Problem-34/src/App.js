import Image from "next/image";
import { createContext, useContext, useState } from "react";

const SessionContext = createContext(null);

export default function App() {
  const session = { name: "Namık Korona", initials: "NK", online: true };
  const [sessionLog, setSessionLog] = useState(session);

  const handleClickLogout = () => {
    setSessionLog({ ...sessionLog, online: false });
    console.log(sessionLog);
  };

  const handleClickLogin = () => {
    setSessionLog({ ...sessionLog, online: true });
    console.log(sessionLog);
  };

  return (
    <SessionContext.Provider value={sessionLog}>
      <div className="bg-white">
        <Header
          session={session}
          onClickLogout={handleClickLogout}
          onClickLogin={handleClickLogin}
        />
        <Hero />
      </div>
    </SessionContext.Provider>
  );
}

function Header({ onClickLogout, onClickLogin }) {
  const session = useContext(SessionContext);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Logo />
        {session.online ? (
          <Avatar onClickLogout={onClickLogout} onClickLogin={onClickLogin} />
        ) : (
          <span onClick={() => onClickLogin()} className=" cursor-pointer">
            Sign In
          </span>
        )}
      </nav>
    </header>
  );
}

function Avatar({ onClickLogout }) {
  const session = useContext(SessionContext);

  return (
    <div className="items-center space-x-2 flex lg:flex-1 lg:justify-end">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
        <span className="text-lg font-medium leading-none text-white">
          {session.initials}
        </span>
      </span>
      <span>{session.name}</span>
      <span onClick={() => onClickLogout()} className=" cursor-pointer">
        Log out
      </span>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Şirketiniz</span>
        <Image
          className="h-8 w-auto"
          src="/mark.svg"
          alt="Tailwind Logo"
          width={500}
          height={500}
        />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Bir sonraki finansman turumuzu duyuruyoruz.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Daha fazla bilgi edinin <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Online işinizi zenginleştirecek veriler
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Başlamak için
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Daha fazla bilgi edinin <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
