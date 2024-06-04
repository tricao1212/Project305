import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import PatientDetails from "./PatientDetails";
import AppointmentDetails from "./AppointmentDetails";
import RequestFromPatient from "./RequestFromPatient";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Store";
import Sidebar, { SidebarItem } from "../../Components/Sidebar";

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
    <div className="flex flex-row">
      <div className="w-1/5">
        <Sidebar>
          <SidebarItem text="Patient Details" navigation="./patientDetails" />
          <SidebarItem text="Request from patients" navigation="./patientRequest" />
          <SidebarItem text="Appointment Details" navigation="./appointment" />
        </Sidebar>
      </div>
        <div className=" p-10">
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