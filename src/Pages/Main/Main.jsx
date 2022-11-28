import React, { useState, memo } from "react";
import pb from "../../helper/Pocketbase";
import { Button } from "@fluentui/react-components";
import { TabList, Tab } from "@fluentui/react-components";
import Home from "../Home/Home";
import "./Main.css";
export default function Main() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const Logout = memo(() => (
    <div role="tabpanel" aria-labelledby="Logout">
      <Button
        onClick={() => {
          pb.authStore.clear();
          window.location.reload(true);
        }}
        id="logout"
        size="large"
      >
        Logout
      </Button>
    </div>
  ));

  const TabPageContainer = (Page) => {
    return (
      <div id="tab-page-container">
        <Page />
      </div>
    );
  };

  return (
    <div id="navtabs">
      <TabList
        selectedValue={selectedTab}
        onTabSelect={(event, data) => {
          setSelectedTab(data.value);
        }}
        vertical
      >
        <Tab value="Home">Home</Tab>
        <Tab value="Logout">Logout</Tab>
      </TabList>
      <div id="tab-page-container">
        {selectedTab === "Home" && <Home />}
        {selectedTab === "Logout" && <Logout />}
      </div>
    </div>
  );
}
