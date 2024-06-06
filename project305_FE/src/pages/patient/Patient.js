import React, { useEffect, useState } from "react";
import Sidebar, { SidebarItem } from "../../Components/Sidebar";
import PatientHome from "./PatientHome";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Store";
import Loading from "../../Components/Loading";
import { Route, Routes } from "react-router-dom";
import Consultations from "./Consultations";
import Appointments from "./Appointments";

function Home() {
  const acc = useSelector((state) => state.AccountRedux.account);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});

  const fetchUser = async () => {
    axios
      .get("https://localhost:7041/api/Patient/Id?Id=" + acc.userId)
      .then((res) => {
        dispatch(setUser(res.data.data));
        setUserInfo(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUser();
    console.log(userInfo);
  })

  if(!userInfo){
    return <Loading/>
  }

  return (
    <div className="flex flex-row">
      <div className="w-1/5 shrink-0">
        <Sidebar>
          <SidebarItem text="Home" navigation={"/patient"}/>
          <SidebarItem text="Consultations" navigation={"/patient/consultations"}/>
          <SidebarItem text="Appointments" navigation={"/patient/appointments"}/>
        </Sidebar>
      </div>
      <Routes>
        {/* <Route path="/" element={<PatientHome user={userInfo} />}/> */}
        <Route path="/consultations" element={<Consultations/>}/>
        {/* <Route path="/appointments" element={<Appointments user={userInfo}/>}/> */}
      </Routes>
    </div>
  );
}

export default Home;
