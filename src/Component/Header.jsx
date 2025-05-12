import React, { use, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdAddAlert } from "react-icons/md";
import { Link, NavLink } from "react-router-dom"; 
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

// Logo image list
const logoImages = [
  "https://i.postimg.cc/xdrvjGXS/b97e2da50337c93b312e6e95fade022f.png",
  "https://i.postimg.cc/SsG1F68S/584a9b47b080d7616d298778.png",
  "https://i.postimg.cc/W1rncmLB/580b57fcd9996e24bc43c4df.png",
  "https://i.postimg.cc/6psrc72Y/580b57fcd9996e24bc43c4e7.png",
  "https://i.postimg.cc/G3g4KJgY/Manchester-City-FC-badge-svg.png",
  "https://i.postimg.cc/QxD1wFJt/584a9b63b080d7616d29877a.png",
  
];

const Header = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const {user, logout}= use(AuthContext)
  const navigate= useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex === logoImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change logo every 2 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  const handleLogBtn=()=>{
    logout()
    navigate("/auth/login")
  }

  const link = (
    <>
      <div className="flex justify-center items-center">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-3 border-blue-500 pb-1 mx-4"
              : "text-white mx-4"
          }
          to={"/"}
        >
          <FaHome size={30} />
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-3 border-blue-500 pb-1 mx-4 "
              : "text-white mx-4"
          }
          to={"/profile"}
        >
          {user ? (
            <img
              className="w-9 object-cover rounded-full"
              src={user.photoURL}
              alt="User"
            />
          ) : (
            <CgProfile size={27} />
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " mx-4 flex justify-center items-center font-medium text-[17px] bg-blue-700 py-2.5 px-3 rounded-full"
              : "text-white mx-4 flex justify-center items-center font-medium text-[17px] bg-red-700 py-2.5 px-3 rounded-full"
          }
          to={"/subscription"}
        >
          <MdAddAlert size={27} />
          Subscription
        </NavLink>
      </li>
      </div>
    </>
  );
  

  return (
    <div className="bg-gradient-to-r from-[#1f005c] via-[#5b0060] to-[#870160] shadow-[0_0_50px_rgba(255,0,255,0.2)]
 py-5">
      <div className="navbar text-2xl lg:w-10/12 lg:mx-auto py-5 min">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow w-[370px] "
            >
              {link}
            </ul>
          </div>

          <Link
            className="flex items-center justify-center ml-10 md:ml-0"
            to={"/"}
          >
            {/* Rotating Logo */}
            <img
              className="w-7 md:w-10 transition duration-500 ease-in-out mr-1"
              src={logoImages[currentLogoIndex]}
              alt="logo"
            />
            <span className="text-xl md:text-2xl font-semibold text-white ml-2">
              𝒮𝓊𝒷𝓈𝒸𝓇𝒾𝓅𝓉𝒾ℴ𝓃 𝐵ℴ𝓍
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>

        <div className="navbar-end">
          <button onClick={handleLogBtn} className="flex justify-center items-center text-xl hover:text-cyan-400 md:gap-1 text-white cursor-pointer">
            <IoLogOut size={25} md:size={30} />
            {user? "Logout":"Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
