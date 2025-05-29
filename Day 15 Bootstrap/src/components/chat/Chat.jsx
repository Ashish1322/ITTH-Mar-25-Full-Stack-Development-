import React from "react";
import useGroup from "../../context/hooks/useGroup";
export default function Chat() {
  const { selectedGroup } = useGroup();
  const messagesData = [
    {
      sender: "Alice",
      text: "Hey team!",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      sender: "Bob",
      text: "Hello Alice!",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ];
  return (
    <div className="col-9 d-flex flex-column p-0">
      <div className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{selectedGroup?.name}</h5>
        <button className="btn btn-light btn-sm">View Members</button>
      </div>

      <div
        className="flex-grow-1 overflow-auto p-3"
        style={{ background: "#f9f9f9" }}
      >
        {messagesData.map((msg, idx) => {
          const isMe = msg.sender === "You";
          return (
            <div
              key={idx}
              className={`d-flex mb-3 ${
                isMe ? "justify-content-end" : "justify-content-start"
              }`}
            >
              {!isMe && (
                <img
                  src={msg.avatar}
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
                <div>{msg.text}</div>
              </div>
              {isMe && (
                <img
                  src={msg.avatar}
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
        <input className="form-control me-2" placeholder="Type a message" />
        <button className="btn btn-success">Send</button>
      </div>
    </div>
  );
}
