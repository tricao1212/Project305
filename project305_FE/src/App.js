import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import CreateAccount from "./pages/admin/CreateAccount";
import CreatePatient from "./pages/admin/CreatePatient";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin/*" element={<Admin/>}/>
    </Routes>
  );
}

export default App;
