import axios from "axios";
import { useState } from "react";

const CreateDoctor = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleCreate = async () => {
    const data = {
      name: name,
      address: address,
    };

    await axios.post("https://localhost:7041/api/Doctor", data)
      .then((res) => {
        console.log(res);
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
      <button onClick={() => handleCreate()} className="mt-3 rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold">
        Create New
      </button>
    </div>
  );
};

export default CreateDoctor;
