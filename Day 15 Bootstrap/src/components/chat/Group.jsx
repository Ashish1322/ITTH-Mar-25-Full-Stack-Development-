import React, { useEffect } from "react";
import { useState } from "react";
import useGroup from "../../context/hooks/useGroup";
import useAuth from "../../context/hooks/useAuth";
export default function Group() {
  const {
    createGroup,
    getAllGroups,
    groups,
    exitGroup,
    deleteGroup,
    setSelectedGroup,
  } = useGroup();
  const [groupName, setGroupName] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    getAllGroups();
  }, []);

  return (
    <div className="col-3 border-end bg-light d-flex flex-column p-3">
      <h5>Groups</h5>
      <div className="mb-2">
        <input
          value={groupName}
          onChange={(e) => setGroupName(e.currentTarget.value)}
          className="form-control mb-2"
          placeholder="New Group Name"
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
      </div>
      <ul className="list-group overflow-auto">
        {groups.length == 0 ? "No Groups found please create of join" : null}
        {groups.map((group) => (
          <li
            key={group._id}
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center`}
            onClick={() => setSelectedGroup(group)}
          >
            <p>{group.name}</p>
            <div>
              {group.admin != user["user_id"] ? (
                <i
                  onClick={() => exitGroup(group._id)}
                  class="fa-solid fa-right-from-bracket mx-3"
                ></i>
              ) : (
                <i
                  onClick={() => deleteGroup(group._id)}
                  class="fa-solid fa-trash"
                ></i>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
