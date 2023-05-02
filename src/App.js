// import Topbar from "./components/topbar/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";

// import Register from "./components/register/Register";

// import Login from "./components/login/Login";

// import Profile from "./components/profile/Profile";



function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
