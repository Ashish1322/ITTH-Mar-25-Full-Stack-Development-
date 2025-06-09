import React, { useEffect, useState } from "react";
import useGroup from "../../context/hooks/useGroup";
import useAuth from "../../context/hooks/useAuth";

export default function Group() {
  const {
    createGroup,
    joinGroup,
    getAllGroups,
    groups,
    exitGroup,
    deleteGroup,
    setSelectedGroup,
  } = useGroup();

  const { uploadFile } = useAuth();

  const [groupName, setGroupName] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    getAllGroups();
  }, []);

  return (
    <div
      className="col-3 border-end bg-light d-flex flex-column p-3"
      style={{ height: "100vh" }}
    >
      <h5>Groups</h5>

      <div className="mb-2">
        <input
          value={groupName}
          onChange={(e) => setGroupName(e.currentTarget.value)}
          className="form-control mb-2"
          placeholder="New Group Name or Group Id to join"
        />
        <button
          onClick={() => {
            createGroup(groupName);
            setGroupName("");
          }}
          className="btn btn-primary w-100"
        >
          Create Group
        </button>
        <button
          onClick={() => {
            joinGroup(groupName);
            setGroupName("");
          }}
          className="btn btn-warning w-100"
        >
          Join Group
        </button>
      </div>

      <ul className="list-group overflow-auto flex-grow-1 mb-3">
        {groups.length === 0
          ? "No Groups found please create or join"
          : groups.map((group) => (
              <li
                key={group._id}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                onClick={() => setSelectedGroup(group)}
              >
                <p className="mb-0">
                  {group.name} ( {group.shortId} )
                </p>
                <div>
                  {group.admin !== user["user_id"] ? (
                    <i
                      onClick={(e) => {
                        e.stopPropagation();
                        exitGroup(group._id);
                      }}
                      className="fa-solid fa-right-from-bracket mx-3"
                      style={{ cursor: "pointer" }}
                    ></i>
                  ) : (
                    <i
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteGroup(group._id);
                      }}
                      className="fa-solid fa-trash"
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                </div>
              </li>
            ))}
      </ul>

      {/* Profile Photo Section */}
      <div className="border-top pt-2">
        <label className="form-label">Select Profile Photo</label>
        <input
          onChange={uploadFile}
          type="file"
          accept="image/*"
          className="form-control"
        />
        {user.profilePhoto && (
          <img
            src={user.profilePhoto}
            alt="Preview"
            className="img-thumbnail mt-2"
            style={{ height: "80px", width: "80px", objectFit: "cover" }}
          />
        )}
      </div>
    </div>
  );
}
