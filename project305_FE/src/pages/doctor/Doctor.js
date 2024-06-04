import React, { useEffect, useState } from "react";
import LeftSidebar, { SidebarItem } from "../../Components/LeftSideBar";
import { Route, Routes } from "react-router-dom";
import PatientDetails from "./PatientDetails";
import AppointmentDetails from "./AppointmentDetails";
import RequestFromPatient from "./RequestFromPatient";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Store";

const Doctor = () => {
  const acc = useSelector((state) => state.AccountRedux.account);
  const dispatch = useDispatch();
  const fectUser = async () => {
    await axios
      .get("https://localhost:7041/api/Doctor/Id?Id=" + acc.userId)
      .then((res) => {
        dispatch(setUser(res.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fectUser();
  });

  return (
    <div className="flex">
      <LeftSidebar>
        <SidebarItem text="Patient Details" link="./patientDetails" />
        <SidebarItem text="Request from patients" link="./patientRequest" />
        <SidebarItem text="Appointment Details" link="./appointment" />
      </LeftSidebar>
      <div className="flex-1 p-10">
        <Routes>
          <Route path="/patientDetails" element={<PatientDetails />} />
          <Route path="/patientRequest" element={<RequestFromPatient />} />
          <Route path="/appointment" element={<AppointmentDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Doctor;
