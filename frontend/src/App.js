import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SercicePage from "./pages/SercicePage";
import Profile from "./pages/Profile";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<SercicePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
