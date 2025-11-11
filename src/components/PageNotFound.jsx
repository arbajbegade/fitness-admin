import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      {/* Logo / Icon */}
      <div className="flex items-center gap-2 mb-6">
        <Dumbbell
          size={36}
          className="text-orange-500 drop-shadow-sm"
          strokeWidth={2.5}
        />
        <span className="text-2xl font-bold text-orange-500">Fitness</span>
      </div>

      {/* 404 Content */}
      <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-linear-to-br from-orange-500 to-pink-500 leading-none">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mt-2">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-8 inline-block bg-linear-to-r from-orange-500 to-pink-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200"
      >
        Go Back Home
      </Link>

      {/* Decorative Gradient Blur */}
      <div className="absolute bottom-10 w-72 h-72 bg-linear-to-br from-orange-400/30 to-pink-500/30 rounded-full blur-3xl opacity-50 -z-10" />
    </div>
  );
};

export default PageNotFound;
