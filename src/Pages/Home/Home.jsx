import React, { useState, memo, useEffect } from "react";
import { Button, Spinner } from "@fluentui/react-components";
import { Persona } from "@fluentui/react-components/unstable";
import pb from "../../helper/Pocketbase";
import "./Home.css";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const getUserInfo = async () => {
    try {
      setLoading(true);
      const record = await pb.collection("users").getOne(pb.authStore.model.id);
      setUserInfo(record);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div id="user-info">
      <Persona
        avatar={{
          image: {
            src:
              "http://127.0.0.1:8090/api/files/_pb_users_auth_/" +
              pb.authStore.model.id +
              "/" +
              userInfo?.avatar,
          },
        }}
        textPosition="before"
        size="huge"
        textAlignment="center"
        name={userInfo ? userInfo.name : ""}
        secondaryText={userInfo ? userInfo.email : ""}
        tertiaryText={userInfo ? "@" + userInfo.username : ""}
      />
    </div>
  );
}
