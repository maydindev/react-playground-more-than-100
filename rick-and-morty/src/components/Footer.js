import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#c2dedc] p-5">
      <ul className="flex flex-wrap justify-center items-center md:justify-between gap-4">
        <li className="min-w-[200px] text-center">
          <p>This website was made using the</p>
          <p> Rick and Morty Api</p>
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://rickandmortyapi.com/
          </a>
        </li>
        <li className="min-w-[200px] text-center">
          {" "}
          <p>
            <a
              href="https://www.linkedin.com/in/cem-çetinkaya-38758523a"
              className="text-blue-600 hover:underline"
            >
              Visit My LinkedIn
            </a>
          </p>
        </li>
        <li className="min-w-[200px] text-center">
          <p>
            <a
              href="https://www.netlify.app/"
              className="text-blue-600 hover:underline"
            >
              Visit My Portfolio
            </a>
          </p>
        </li>
        {/* <h5>
          <img src="/footerpic.png" alt="Rick and Morty Logo" />
        </h5> */}
      </ul>
      <div className="w-full text-center mt-5">
        <p>&copy; {new Date().getFullYear()} Rick and Morty Universe</p>
      </div>
    </footer>
  );
};

export default Footer;
