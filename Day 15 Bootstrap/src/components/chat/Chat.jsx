import React, { useState } from "react";
import useAuth from "../../context/hooks/useAuth";
import useGroup from "../../context/hooks/useGroup";
import client from "../../socket";
import Members from "./Members";
export default function Chat() {
  const { selectedGroup, messages } = useGroup();
  const { user } = useAuth();

  const [message, setMessage] = useState("");
  const sendMessage = () => {
    if (selectedGroup == null) {
      alert("Please select a group to send message");
      return;
    }
    // Emit Event
    client.emit("message", {
      content: message,
      groupId: selectedGroup?._id,
      senderId: user.user_id,
    });
    setMessage("");
  };

  return (
    <div className="col-9 d-flex flex-column p-0">
      <div className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{selectedGroup?.name}</h5>

        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-light btn-sm"
        >
          View Members
        </button>
      </div>
      <Members />

      <div
        className="flex-grow-1 overflow-auto p-3"
        style={{ background: "#f9f9f9" }}
      >
        {messages.map((msg, idx) => {
          const isMe = msg.senderId == user._id;
          return (
            <div
              key={idx}
              className={`d-flex mb-3 ${
                isMe ? "justify-content-end" : "justify-content-start"
              }`}
            >
              {!isMe && (
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                  alt="avatar"
                />
              )}
              <div
                className={`p-2 rounded ${
                  isMe ? "bg-success text-white" : "bg-light"
                }`}
                style={{ maxWidth: "60%" }}
              >
                <div className="fw-bold">{msg.sender}</div>
                <div>{msg.content}</div>
              </div>
              {isMe && (
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  className="rounded-circle ms-2"
                  width="40"
                  height="40"
                  alt="avatar"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="p-3 border-top d-flex">
        <input
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          className="form-control me-2"
          placeholder="Type a message"
        />
        <button onClick={sendMessage} className="btn btn-success">
          Send
        </button>
      </div>
    </div>
  );
}
