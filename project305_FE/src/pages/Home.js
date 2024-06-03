import React, { useEffect, useState } from "react";
import Sidebar, { SidebarItem } from "../Components/Sidebar";
import PatientHome from "./patient/PatientHome";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/Store";
import Loading from "../Components/Loading";

function Home() {
  const acc = useSelector((state) => state.AccountRedux.account);
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const fetchUser = async () => {
    axios
      .get("https://localhost:7041/api/Patient/Id?Id=" + acc.userId)
      .then((res) => {
        dispatch(setUser(res.data.data));
        setUser(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUser();
  },[])

  if(!user){
    return <Loading/>
  }

  return (
    <div className="flex flex-row">
      <div className="max-w-xs">
        <Sidebar>
          <SidebarItem text="Home" />
          <SidebarItem text="Health status" />
          <SidebarItem text="Consultations" />
          <SidebarItem text="Payments" />
        </Sidebar>
      </div>
      <PatientHome user={user} />
    </div>
  );
}

export default Home;
