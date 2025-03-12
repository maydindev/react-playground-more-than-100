import React from "react";

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 text-lg">
      <p className="text-4xl">404</p>
      <h1 className="text-2xl"> This isn't the page you're looking for.</h1>
      <img
        src="https://i.kym-cdn.com/entries/icons/original/000/018/682/obi-wan.jpg"
        alt="Not Found"
        className=""
      />
      This isn't the page I'm looking for. Move along. Move along.
      <p>
        <Link to="/" className="text-blue-600 hover:underline">
          Home{" "}
        </Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
