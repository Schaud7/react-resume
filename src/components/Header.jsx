import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Brand/Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              React-Resume
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/employment"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Employment
              </Link>
              <Link
                to="/education"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Education
              </Link>
              {/* Added Links to the Skills and References Pages */}
              <Link
                to="/skills"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Skills
              </Link>
              <Link
                to="/references"
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                References
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
