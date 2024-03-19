import logo from "./logo.svg";
// import "./App.css";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import { Link } from "react-router-dom";
import AdminSignUp from "./Components/AdminSignUp";
import AdminHomePage from "./Components/AdminHomePage";
import ErrorPage1 from "./Components/ErrorPage1";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<ErrorPage1/>}/>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/user" element={<UserLogin />} />
          <Route path="/AdminSignUp" element={<AdminSignUp/>}/>
          <Route path="/Adminhomepage/*" element={<AdminHomePage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
