import {
  FolderIcon,
  HomeIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext(true);

export default function Header() {
  const [check, setCheck] = useState(true);
  return (
    <AuthContext.Provider value={check}>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pt-6">
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <Links />
            <Avatar />
          </ul>
        </nav>
      </div>
    </AuthContext.Provider>
  );
}

function Links() {
  const check = useContext(AuthContext);

  const authLinks = [
    { name: "Dashboard", href: "#", icon: HomeIcon, count: "5", current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    {
      name: "Projects",
      href: "#",
      icon: FolderIcon,
      count: "12",
      current: false,
    },
  ];
  const unAuthLinks = [
    {
      name: "Log in",
      href: "#",
      icon: KeyIcon,
      current: false,
    },
  ];

  return (
    <li>
      <ul role="list" className="-mx-2 space-y-1">
        {check
          ? authLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                >
                  <item.icon
                    className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    aria-hidden="true"
                  />
                  {item.name}
                  {item.count ? (
                    <span
                      className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                      aria-hidden="true"
                    >
                      {item.count}
                    </span>
                  ) : null}
                </a>
              </li>
            ))
          : unAuthLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                >
                  <item.icon
                    className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    aria-hidden="true"
                  />
                  {item.name}
                  {item.count ? (
                    <span
                      className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                      aria-hidden="true"
                    >
                      {item.count}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
      </ul>
    </li>
  );
}

function Avatar() {
  const check = useContext(AuthContext);
  // if (true) return null;
  if (!check) {
    return null;
  } else {
    return (
      <li className="-mx-6 mt-auto">
        <a
          href="#"
          className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
        >
          <Image
            className="h-8 w-8 rounded-full bg-indigo-700"
            src="/photo.png"
            alt="Tom Cook"
            width={500}
            height={500}
          />
          <span className="sr-only">Profiliniz</span>
          <span aria-hidden="true">Tom Cook</span>
        </a>
      </li>
    );
  }
}
