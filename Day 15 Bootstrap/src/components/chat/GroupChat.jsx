import React, { useState } from "react";
import Chat from "./Chat";
import Group from "./Group";

function GroupChat() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <Group />
        <Chat />
      </div>
    </div>
  );
}

export default GroupChat;
