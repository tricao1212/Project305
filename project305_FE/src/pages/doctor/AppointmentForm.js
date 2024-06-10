import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const AppointmentForm = () => {
  const location = useLocation();
  const doctorId = location.state.doctorId;
  const patientId = location.state.patientId;
  const patientName = location.state.patientName;
  const [appointment, setAppointment] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [fee, setFee] = useState("");

  const handleCreate = async () => {
    const postData = {
      doctorId: doctorId,
      patientId: patientId,
      appointment: appointment,
      dateTime: dateTime,
      fee: fee,
    };
    await axios
      .post("https://localhost:7041/api/InforConsult", postData)
      .then((res) => {
        toast("Created Successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-5 px-5 w-full">
      <h1 className="font-bold text-2xl">Patient name: {patientName}</h1>
      <div className="w-full">
        <label
          htmlFor="Appointment"
          className="block font-bold text-base leading-6 text-gray-900"
        >
          Appointment
        </label>
        <input
          id="appointment"
          type="text"
          placeholder="Destination"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setAppointment(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="Appointment time"
          className="block font-bold text-base leading-6 text-gray-900"
        >
          Appointment time
        </label>
        <input
          id="dateTime"
          type="datetime-local"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setDateTime(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="Fee"
          className="block font-bold text-base leading-6 text-gray-900"
        >
          Fee
        </label>
        <input
          id="fee"
          type="text"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setFee(e.target.value)}
        />
      </div>
      <button
        onClick={() => handleCreate()}
        className="mt-3 rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold"
      >
        Create an appointment
      </button>
    </div>
  );
};

export default AppointmentForm;
