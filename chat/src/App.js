
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Navigation from "./component/Navigation/Navigation";
import Login from "./component/Login/Login"


function App() {
  return (
    <Router>
        <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/chat" element={<Home/>} />
     <Route path="/n" element={<Navigation/>} />
          </Routes>
    </Router>
  );
}

export default App;
