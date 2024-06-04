import { useContext, createContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-[#cae9ec] border-r shadow-md">
        <div className="p-4 pb-2 flex justify-center items-center">
          <img
            src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
            className={`overflow-hidden transition-all w-32`}
            alt=""
          />
        </div>

        <SidebarContext.Provider>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex p-3">
          <button className="flex-1 bg-red-500 text-white py-2 px-3 rounded-md hover:shadow-md">
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, alert, link }) {
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-3
        font-medium rounded-md cursor-pointer
        transition-colors group bg-white hover:shadow-md
    `}
    >
      {icon}
      {/* <span className={`overflow-hidden transition-all w-52 ml-3`}>{text}</span> */}
      {/* <Link to={"./newaccount"}> */}
        <button className="rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold">
          {text}
        </button>
      {/* </Link> */}
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} />
      )}
      {/* <Routes>
        <Route path="/newaccount" element={<CreateAccount />} />
        <Route path="/newpatient" element={<CreatePatient />} />
      </Routes> */}
    </li>
  );
}
