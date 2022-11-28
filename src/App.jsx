import { useState } from "react";
import { Button } from "@fluentui/react-components";
import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
