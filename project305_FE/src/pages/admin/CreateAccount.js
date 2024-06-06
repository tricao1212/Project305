import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const handleCreate = async () => {
    const acc = {
      email: email,
      password: password,
      role: "PATIENT",
      userId: userId,
    };
    await axios.post("https://localhost:7041/api/Account", acc)
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
        className="mt-3 rounded-xl border-2 p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold"
      >
        Create New
      </button>
    </div>
  );
};

export default CreateAccount;
