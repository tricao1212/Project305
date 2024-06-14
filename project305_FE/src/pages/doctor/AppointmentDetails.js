import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../Components/Loading";
import { Bounce, toast } from "react-toastify";

const AppointmentDetails = () => {
  const [appoint, setAppoint] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const acc = useSelector((state) => state.AccountRedux.account);

  const fetchAppoint = async () => {
    await axios
      .get("https://localhost:7041/api/InforConsult/IdDoctor?Id=" + acc.userId)
      .then((res) => {
        setAppoint(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (id) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (userConfirmed) {
      await axios
        .delete("https://localhost:7041/api/InforConsult/Delete?Id=" + id)
        .then((res) => {
          toast("Deleted Successful!", {
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
          fetchAppoint();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
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
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">Destination to consult: </span>
            {data.appointment}
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">Date: </span>
            {DateImprove(data.dateTime)}
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">Fee: </span>
            {data.fee}
          </p>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => handleDelete(data.id)}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchAppoint();
  }, []);

  if (!appoint) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center m-10">
      <div>
        <h1 className="font-bold text-3xl text-center mb-4">
          Appointment list
        </h1>
        {appoint.map((res) => (
          <BlockInfo key={res.id} data={res} />
        ))}
      </div>
    </div>
  );

  function DateImprove(date) {
    const d = new Date(date);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  }

};



export default AppointmentDetails;
