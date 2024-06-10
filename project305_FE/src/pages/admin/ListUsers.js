import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";

const ListUsers = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const fetchUser = async () => {
    await axios
      .get("https://localhost:7041/api/Patient/All")
      .then((res) => {
        setPatients(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get("https://localhost:7041/api/Doctor/All")
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const BlockPatient = (data) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{data.data.name}</h1>
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">id: </span>
            {data.data.id}
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">Address: </span>
            {data.data.address}
          </p>
        </div>
      </div>
    );
  };

  const BlockDoctor = (data) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{data.data.name}</h1>
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">id: </span>
            {data.data.id}
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            <span className="font-bold">Address: </span>
            {data.data.address}
          </p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!patients && !doctors) {
    return <Loading />;
  }
  return (
    <div className="flex flex-row m-10 space-x-10 justify-between w-full">
      <div className="flex-1">
        <h1 className="font-bold text-2xl">List patients:</h1>
        {patients.map((res) => (
          <BlockPatient key={res.id} data={res} />
        ))}
      </div>
      <div className="flex-1">
        <h1 className="font-bold text-2xl">List doctors:</h1>
        {doctors.map((res) => (
          <BlockDoctor key={res.id} data={res} />
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
