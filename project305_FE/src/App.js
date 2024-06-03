import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/Login";
import Home from "./pages/patient/Home";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin/*" element={<Admin/>}/>
      <Route path="/patient/*" element={<Home/>}/>
      {/* <Route path="/admin/*" element={<Admin/>}/> */}
    </Routes>
  );
}

export default App;
