import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../Components/Loading";

const PatientDetails = () => {
  const [request, setRequest] = useState([]);
  const acc = useSelector((state) => state.AccountRedux.account);

  const fectRequest = async () => {
    axios
      .get(
        "https://localhost:7041/api/RequestConsult/IdDoctor?Id=" + acc.userId
      )
      .then((res) => {
        setRequest(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const BlockInfo = (data) => {
  const [patient, setPatient] = useState({});
    const fectPatient = async () => {
      axios
        .get("https://localhost:7041/api/Patient/Id?Id=" + data.data.patientId)
        .then((res) => {
          console.log(res.data.data.predefined);
          setPatient(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    console.log(patient);
    useEffect(() => {
      fectPatient();
    }, []);

    if (!patient) {
      return <Loading />;
    }
    return (
      <div>
        <div>{patient.name}</div>
        <div>{patient.address}</div>
        <div>{patient.dob}</div>
        <div>{patient.predefined&&patient.predefined.temperature}</div>
        <div>{patient.predefined&&patient.predefined.bloodPressure}</div>
        <div>{patient.predefined&&patient.predefined.heartRate}</div>
      </div>
    );
  };

  useEffect(() => {
    fectRequest();
  }, []);

  if (!request) {
    return <Loading />;
  }

  return (
    <div>
      <h1>PatientDetails</h1>
      {request.map((res) => (
        <BlockInfo key={res.id} data={res} />
      ))}
    </div>
  );
};

export default PatientDetails;
