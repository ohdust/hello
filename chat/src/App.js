
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Home from "./component/Home/Home";
import Navigation from "./component/Navigation/Navigation";





function App() {




  return (


    <Router>
        <Routes>

      <Route exact path="/" element={<Join/>} />
      <Route path="/chat" element={<Home/>} />
     <Route path="/n" element={<Navigation/>} />
          </Routes>
    </Router>


  );
}

export default App;
