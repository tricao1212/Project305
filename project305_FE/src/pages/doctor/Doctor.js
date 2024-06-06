import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import PatientDetails from "./PatientDetails";
import AppointmentDetails from "./AppointmentDetails";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Store";
import Sidebar, { SidebarItem } from "../../Components/Sidebar";
import AppointmentForm from "./AppointmentForm";

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
      <div className="w-1/5 shrink-0">
        <Sidebar>
          <SidebarItem text="Patient Details" navigation="./patientDetails" />
          <SidebarItem text="Appointment Lists" navigation="./appointment" />
        </Sidebar>
      </div>

      <Routes>
        <Route path="/patientDetails" element={<PatientDetails />} />
        <Route path="/appointment" element={<AppointmentDetails />} />
        <Route
          path="/patientDetails/appointmentForm"
          element={<AppointmentForm />}
        />
      </Routes>
    </div>
  );
};

export default Doctor;
