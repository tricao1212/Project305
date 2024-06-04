import React, { createContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarContext = createContext();
const LeftSidebar = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4 pb-2 flex justify-center items-center">
        <img
          src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
          className={`overflow-hidden transition-all w-32`}
          alt=""
        />
      </div>
      <nav className="mt-10">
        <SidebarContext.Provider>{children}</SidebarContext.Provider>
      </nav>
      <div className="flex p-3">
        <button
          onClick={() => handleLogout()}
          className="flex-1 bg-red-500 text-white py-2 px-3 rounded-md hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default LeftSidebar;

export function SidebarItem({ text, link }) {
  return (
    <Link
      to={link}
      className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
    >
      <h2 className="text-white text-lg font-semibold">{text}</h2>
    </Link>
  );
}
