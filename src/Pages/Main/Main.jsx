import React from "react";
import pb from "../../helper/Pocketbase";
import { Button } from "@fluentui/react-components";

export default function Main() {
  return (
    <div>
      <Button
        onClick={() => {
          pb.authStore.clear();
            window.location.reload(true);
        }}
      >
        Logout
      </Button>
    </div>
  );
}
