import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/Login";
import Home from "./pages/patient/Home";
import Protected from "./Components/Protected";
import Patient from "./pages/patient/Patient";
import Doctor from "./pages/doctor/Doctor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin/*" element={<Protected><Admin/></Protected>}/>
      <Route path="/patient/*" element={<Protected><Home/></Protected>}/>
      <Route path="/doctor/*" element={<Protected><Doctor/></Protected>}/>
    </Routes>
  );
}

export default App;
