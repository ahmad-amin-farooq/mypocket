import { useState } from "react";
import { Button } from "@fluentui/react-components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button appearance="primary">Get started</Button>
    </div>
  );
}

export default App;
