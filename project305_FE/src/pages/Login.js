import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccount } from "../redux/Store";
import CryptoJS from "crypto-js";

function Login() {
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const hashed = CryptoJS.SHA256(password);
    const url = `https://localhost:7041/api/Account/Auth?Email=${encodeURIComponent(email)}&Password=${encodeURIComponent(hashed)}`;
    await axios.post(url)
      .then((res) => {
        const data = res.data.data;
        dispatch(setAccount(data));
        if(data.role === 'ADMIN'){
          navigate("/admin");
        }
        else if(data.role === 'PATIENT'){
          navigate("/patient");
        }
        else{
          navigate("/doctor");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center bg-emerald-300 w-full">
      <div className="lg:w-4/5 w-full columns-2 lg:bg-[#cae9ec] rounded-xl  lg:shadow-xl flex lg:justify-evenly justify-center bg-emerald-300">
        <div className="">
          <img
            src="https://img.freepik.com/free-vector/patient-being-examined-by-doctor-clinic-illustration_23-2148863995.jpg?t=st=1716125195~exp=1716128795~hmac=a2db82296db8b9bacd072bbd67370ef52f6d9c9d30c1f2f105601cef5353b903&w=740"
            alt="img"
            className="object-contain h-full hidden lg:block"
          />
        </div>
        <div className="my-[5%] lg:w-1/3 w-2/4 p-12 bg-white bg-opacity-80 rounded-xl shadow-xl sm:m-4">
          <div className="flex flex-col w-full h-full rounded-lg space-y-4 items-center justify-center">
            <img
              src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
              alt="logo"
              className="max-w-24 rounded-lg"
            />
            <h1 className="text-3xl font-bold text-center my-0">Welcome</h1>
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
                type={hidePass ? "password" : "text"}
                placeholder="password"
                className="rounded-sm focus:border-[#2185f5] border-2 p-3 w-full"
                onInput={(e) => setPassword(e.target.value)}
              />
              <div className="flex content-center w-full space-x-1">
                <input type="checkbox" onClick={() => setHidePass(!hidePass)} />
                <p>Show Password</p>
              </div>
            </div>
            <div className="w-full">
              <button
                className="border-0 rounded-xl p-3 bg-gradient-to-r from-[#2185f5] via-[#40d1b2] to-[#4de67d] hover:shadow-xl w-full text-white text-lg font-semibold"
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
