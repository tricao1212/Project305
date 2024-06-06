import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/Login";
import Home from "./pages/patient/PatientHome";
import Protected from "./Components/Protected";
import Doctor from "./pages/doctor/Doctor";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/*" element={<Protected><Admin/></Protected>}/>
        <Route path="/patient/*" element={<Protected><Home/></Protected>}/>
        <Route path="/doctor/*" element={<Protected><Doctor/></Protected>}/>
      </Routes>
    </div>
  );
}

export default App;
