import CharacterContext from "../contexts/CharacterContext";

import { useContext } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const { isOpen, toggle, toggleOff } = useContext(CharacterContext);

  return (
    <nav className="py-1 bg-[#c2dedc]">
      <div className="px-4 py-2 flex justify-between items-center w-full">
        <NavLink
          className="text-xl hover:text-[#26b1c6] font-bold"
          to="/"
          onClick={toggleOff}
        >
          Home
        </NavLink>
        <button
          className="lg:hidden text-gray-600"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="block w-6 h-[2px] bg-gray-600 mb-[6px]"></span>
          <span className="block w-6 h-[2px] bg-gray-600 mb-[6px]"></span>
          <span className="block w-6 h-[2px] bg-gray-600"></span>
        </button>
        <div className={`hidden lg:flex space-x-6`}>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                className="hover:text-[#26b1c6] font-bold"
                aria-current="page"
                to="/characters"
              >
                Character List
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-[#26b1c6] font-bold"
                aria-current="page"
                to="/locations"
              >
                Location List
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-[#26b1c6] font-bold"
                aria-current="page"
                to="/random"
              >
                Random Character
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all ${
          isOpen ? "duration-700" : "duration-300"
        } w-full bg-[#c2dedc] ${isOpen ? "max-h-[120px]" : "max-h-0"}`}
      >
        <ul className="flex flex-col pl-6 space-y-4 py-2">
          <li>
            <NavLink
              className="hover:text-[#26b1c6] font-bold"
              aria-current="page"
              to="/characters"
              onClick={toggle}
            >
              Character List
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-[#26b1c6] font-bold"
              aria-current="page"
              to="/locations"
              onClick={toggle}
            >
              Location List
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-[#26b1c6] font-bold"
              aria-current="page"
              to="/random"
              onClick={toggle}
            >
              Random Character
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
