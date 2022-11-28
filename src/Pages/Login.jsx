import React, { useState, useTransition } from "react";
import { Button, Input, Label, Text } from "@fluentui/react-components";
import { AiTwotoneLock } from "react-icons/ai";
import "./Login.css";
import Fade from "react-reveal/Fade";
import pb from "../helper/Pocketbase";
import { Grid } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Alert } from "@fluentui/react-components/unstable";


export default function Login() {
  const navigate = useNavigate();
  const [secureCode, setSecureCode] = useState("");
  const [logStatus, setLogStatus] = useState({
    status: true,
    message: "",
  });
  const [isPending, setLoading] = useState(false);

  const login = async () => {
    if (secureCode.length !== 0) {
      try {
        setLoading(true);
        const authData = await pb
          .collection("users")
          .authWithPassword("notaaf", secureCode);
        if (authData) {
          window.location.reload(true);
        }
        setLoading(false);
      } catch (err) {
        setLogStatus({
          status: false,
          message: String(err).split(":")[1],
        });
        setLoading(false);
      }
    } else {
      setLogStatus({
        status: false,
        message: "Please enter a secure code",
      });
    }
  };

  return (
    <div id="main">
      <Fade top>
        <div id="container">
          <Label id="label">Secure Code</Label>
          <Input
            id="input"
            size="large"
            type="password"
            contentBefore={<AiTwotoneLock />}
            title="Enter Secure Code"
            onChange={(x) => {
              setSecureCode(x.target.value);
            }}
            onKeyPress={async (e) => {
              if (e.key === "Enter") {
                await login();
              }
            }}
          />
          {logStatus.status ? null : (
            <Alert intent="error" id="error">
              {logStatus.message}
            </Alert>
          )}
          <Button id="button" size="large" onClick={login} disabled={isPending}>
            {isPending ? (
              <Grid
                id="loader"
                color="#fff"
                wrapperStyle={{
                  padding: "5px",
                }}
                height={20}
                width={20}
              />
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </Fade>
    </div>
  );
}
