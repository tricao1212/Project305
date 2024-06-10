import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../Components/Loading";
import Popup from "../../Components/Popup";
import { useNavigate } from "react-router-dom";

const PatientDetails = () => {
  const [request, setRequest] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const acc = useSelector((state) => state.AccountRedux.account);
  const navigate = useNavigate();

  const handleMakeAppointment = (doctorId, patientId, patientName) =>{
    navigate('appointmentForm', { state: { doctorId: doctorId, patientId: patientId , patientName: patientName} })
  } 

  const fetchRequest = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7041/api/RequestConsult/IdDoctor?Id=${acc.userId}`
      );
      setRequest(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPatientDetails = async (patientId) => {
    try {
      const res = await axios.get(
        `https://localhost:7041/api/Patient/Id?Id=${patientId}`
      );
      setPopupContent(res.data.data);
      setShowPopup(true);
    } catch (error) {
      console.log(error);
    }
  };

  const BlockInfo = ({ data }) => {
    const [patient, setPatient] = useState(null);

    const fetchPatient = async () => {
      try {
        const res = await axios.get(
          `https://localhost:7041/api/Patient/Id?Id=${data.patientId}`
        );
        setPatient(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchPatient();
    }, []);

    if (!patient) {
      return <Loading />;
    }

    return (
      <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 w-[100vh]">
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{patient.name}</h1>
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">Date of birth: </span>
            {DateImprove(patient.dob)}
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">Address: </span>
            {patient.address}
          </p>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => handleMakeAppointment(data.doctorId, patient.id, patient.name)}
              className="px-4 py-2 mx-5 bg-green-500 text-white text-sm font-medium rounded hover:bg-blue-700"
            >
              Make an appointment
            </button>
            <button
              onClick={() => fetchPatientDetails(data.patientId)}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!request) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center m-10">
      <h1 className="font-bold text-3xl text-center mb-4">Patient request</h1>
      <div>
        {request.map((res) => (
          <BlockInfo key={res.id} data={res} />
        ))}
      </div>
      <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        title="Patient Details"
        content={
          <div className="space-y-5 text-lg">
            <p>
              <strong>Name: </strong> {popupContent.name}
            </p>
            <p>
              <strong>Date of Birth: </strong> {DateImprove(popupContent.dob)}
            </p>
            <p>
              <strong>Address: </strong> {popupContent.address}
            </p>
            <p>
              <strong>Temperature: </strong>{" "}
              {popupContent.predefined && popupContent.predefined.temperature}
            </p>
            <p>
              <strong>Blood pressure: </strong>{" "}
              {popupContent.predefined && popupContent.predefined.bloodPressure}
            </p>
            <p>
              <strong>Heart rate: </strong>{" "}
              {popupContent.predefined && popupContent.predefined.heartRate}
            </p>
          </div>
        }
      />
    </div>
  );

  function DateImprove(date) {
    const d = new Date(date);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  }
};

export default PatientDetails;
