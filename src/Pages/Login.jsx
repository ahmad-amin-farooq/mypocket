import React, { useState } from "react";
import { Button, Input, Label, Text } from "@fluentui/react-components";
import { AiTwotoneLock } from "react-icons/ai";
import "./Login.css";
import Fade from "react-reveal/Pulse";
export default function Login() {
  const [secureCode, setSecureCode] = useState(0);
  return (
    <div id="main">
      <Fade >
        <div id="container">
          <Label id="label">Secure Code</Label>
          <Input
            id="input"
            contentBefore={<AiTwotoneLock />}
            title="Enter Secure Code"
            onChange={(x) => {
              setSecureCode(x.target.value);
            }}
          />
          <Button id="button" onClick={() => {}}>
            Login
          </Button>
        </div>
      </Fade>
    </div>
  );
}
