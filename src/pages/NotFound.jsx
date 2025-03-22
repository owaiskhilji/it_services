import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-teal-500 text-white text-lg font-medium rounded-md shadow hover:bg-teal-600 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
