import React, { useEffect, useState } from "react";
import Sidebar, { SidebarItem } from "../../Components/Sidebar";
import PatientHome from "./PatientHome";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Store";
import Loading from "../../Components/Loading";
import { Route, Routes } from "react-router-dom";

function Home() {
  const acc = useSelector((state) => state.AccountRedux.account);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState();

  const fetchUser = async () => {
    axios
      .get("https://localhost:7041/api/Patient/Id?Id=" + acc.userId)
      .then((res) => {
        dispatch(setUser(res.data.data));
        setUserInfo(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUser();
  },[])

  if(!userInfo){
    return <Loading/>
  }

  return (
    <div className="flex flex-row">
      <div className="max-w-xs">
        <Sidebar>
          <SidebarItem text="Home" navigation={"/patient"}/>
          <SidebarItem text="Health status" navigation={"/patient/health"}/>
          <SidebarItem text="Consultations" navigation={"/patient/consultations"}/>
          <SidebarItem text="Payments" navigation={"/patient/payment"}/>
        </Sidebar>
      </div>
      <Routes>
        <Route path="/" element={<PatientHome user={userInfo} />}/>
        <Route path="/health" />
        <Route path="/consultations" />
        <Route path="/payment" />
      </Routes>
    </div>
  );
}

export default Home;
