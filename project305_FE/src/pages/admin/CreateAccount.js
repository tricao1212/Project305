import axios from "axios";
import { useState } from "react";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const handleCreate = async () => {
    const acc = {
      email: email,
      password: password,
      role: "PATIENT",
      userId: userId,
    };
    await axios
      .post("https://localhost:7041/api/Account", acc)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="text"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          User Id:
        </label>
        <input
          type="number"
          placeholder="User Id"
          className="rounded-sm border-2 focus:border-[#2185f5] p-3 w-full"
          onInput={(e) => setUserId(e.target.value)}
        />
      </div>
      <button
        onClick={() => handleCreate()}
        className="rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold"
      >
        Create New
      </button>
    </div>
  );
};

export default CreateAccount;
