import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/Login";
import Patient from "./pages/patient/Patient";
import Doctor from "./pages/doctor/Doctor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin/*" element={<Admin/>}/>
      <Route path="/patient/*" element={<Patient/>}/>
      <Route path="/doctor/*" element={<Doctor/>}/>
    </Routes>
  );
}

export default App;
