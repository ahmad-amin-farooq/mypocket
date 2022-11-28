import { useState } from "react";
import Login from "./Pages/Login";
import Main from "./Pages/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PB from "./helper/Pocketbase";

function App() {
  const [isLogged, setLogged] = useState(PB.authStore.isValid);
  return (
    <Router>
      <Routes>
        {isLogged ? (
          <Route path="/" element={<Main />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
