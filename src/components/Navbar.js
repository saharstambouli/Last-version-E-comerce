import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user from localStorage
  const navigate = useNavigate();

  // Logout function to clear user data and redirect to login
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="text-black px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-white text-gray-800 rounded-full w-10 h-10 flex justify-center items-center">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-semibold">Furniro</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to='/' className="text-decoration-none text-dark hover:text-gray-400">Home</Link>
          <Link to='/Shop' className="text-decoration-none text-dark hover:text-gray-400">Shop</Link>
          <Link to='/About' className="text-decoration-none text-dark hover:text-gray-400">About</Link>
          <Link to='/Contact' className="text-decoration-none text-dark hover:text-gray-400">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              {/* Display user name */}
              <p className="text-gray-800"> {user.firstName} {user.lastName}</p>
              <button 
                onClick={handleLogout} 
                className="text-decoration-none text-dark hover:text-gray-400 ml-4"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to='/Login' className="text-decoration-none text-dark hover:text-gray-400">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
          
          <Link to='/Search' className="text-decoration-none text-dark hover:text-gray-400">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <Link to='/Favorits' className="text-decoration-none text-dark hover:text-gray-400">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to='/Cart' className="text-decoration-none text-dark hover:text-gray-400">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

