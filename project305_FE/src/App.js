import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/Login";
import Home from "./pages/patient/Home";
import Protected from "./Components/Protected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin/*" element={<Protected><Admin/></Protected>}/>
      <Route path="/patient/*" element={<Protected><Home/></Protected>}/>
    </Routes>
  );
}

export default App;
