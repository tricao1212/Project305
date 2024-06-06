import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const CreatePatient = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [temperature, setTemperature] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [dob, setDob] = useState(null);
  const navigate = useNavigate();
  const handleCreate = async () => {
    const data = {
      name: name,
      address: address,
      dob: dob,
      predefined: {
        temperature: temperature,
        bloodPressure: bloodPressure,
        heartRate: heartRate,
      },
    };

    await axios.post("https://localhost:7041/api/Patient", data)
      .then((res) => {
        console.log(res);
        toast('Created Successful!', {
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
      navigate("/admin")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5 px-5">
      <div className="w-full">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="dob"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date of Birth
        </label>
        <input
          id="dob"
          type="date"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="address"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Address
        </label>
        <input
          id="address"
          type="text"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setAddress(e.target.value)}
        />
      </div>
      <h1 className="mb-3 mt-3">Predefined Sensor</h1>
      <div className="w-full">
        <label
          htmlFor="temperature"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Temperature
        </label>
        <input
          id="temperature"
          type="text"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setTemperature(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="bloodpressure"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Blood Pressure
        </label>
        <input
          id="bloodpressure"
          type="text"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setBloodPressure(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="heartrate"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Heart Rate
        </label>
        <input
          id="heartrate"
          type="text"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setHeartRate(e.target.value)}
        />
      </div>
      <button onClick={() => handleCreate()} className="mt-3 rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold">
        Create New
      </button>
    </div>
  );
};

export default CreatePatient;
