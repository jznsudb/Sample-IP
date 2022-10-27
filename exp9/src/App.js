import "./App.css";
import NavBar from "./Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
