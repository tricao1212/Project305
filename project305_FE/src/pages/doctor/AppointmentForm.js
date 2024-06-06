import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AppointmentForm = () => {
  const location = useLocation();
  const doctorId = location.state.doctorId;
  const patientId = location.state.patientId;
  const [appoiment, setAppointment] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [fee, setFee] = useState("");

  const handleCreate = () => {};
  return (
    <div className="container mt-5 px-5">
      <div className="w-full">
        <label
          htmlFor="Appointment"
          className="block text-sm font-medium leading-6 text-gray-900"
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
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Appointment time
        </label>
        <input
          id="dateTime"
          type="date"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setDateTime(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="Fee"
          className="block text-sm font-medium leading-6 text-gray-900"
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
