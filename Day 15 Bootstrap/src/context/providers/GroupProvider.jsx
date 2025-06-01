import React, { useEffect, useState } from "react";
import GroupContext from "../GroupContext";
import { BASE_URL } from "../../constants";
import useAuth from "../hooks/useAuth";
import client from "../../socket";
export default function GroupProvider({ children }) {
  const { user } = useAuth();
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const createGroup = (name) => {
    fetch(`${BASE_URL}/group`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: user["accessToken"],
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then(async (res) => {
        if (res.status == 201) {
          return res.json();
        }
        let response = await res.json();
        throw new Error(response["message"]);
      })
      .then((data) => {
        setGroups([...groups, data["group"]]);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const exitGroup = (groupId) => {
    fetch(`${BASE_URL}/group/exit/${groupId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        authorization: user["accessToken"],
      },
    })
      .then(async (res) => {
        if (res.status == 200) {
          return res.json();
        }
        let response = await res.json();
        throw new Error(response["message"]);
      })
      .then((data) => {
        alert("Group Exited");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteGroup = (groupId) => {
    fetch(`${BASE_URL}/group/${groupId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: user["accessToken"],
      },
    })
      .then(async (res) => {
        if (res.status == 200) {
          return res.json();
        }
        let response = await res.json();
        throw new Error(response["message"]);
      })
      .then((data) => {
        let filterd = groups.filter((grp) => {
          if (grp._id != groupId) return grp;
        });
        setGroups(filterd);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getAllGroups = () => {
    fetch(`${BASE_URL}/group`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: user["accessToken"],
      },
    })
      .then(async (res) => {
        return res.json();
      })
      .then((data) => {
        setGroups(data["groups"]);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getAllMessages = () => {
    fetch(`${BASE_URL}/group/messages/${selectedGroup._id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: user["accessToken"],
      },
    })
      .then(async (res) => {
        return res.json();
      })
      .then((data) => {
        setMessages(data["messages"]);
      })
      .catch((err) => {
        alert(err);
      });
  };

  // CHAT
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (selectedGroup) {
      client.on(selectedGroup._id, (payload) => {
        setMessages((old) => [...old, payload]);
      });
      getAllMessages();
    }
    // cleanup funtionc
    return () => {
      if (selectedGroup) client.removeListener(selectedGroup._id);
    };
  }, [selectedGroup]);

  return (
    <GroupContext.Provider
      value={{
        createGroup,
        exitGroup,
        deleteGroup,
        getAllGroups,
        groups,
        selectedGroup,
        setSelectedGroup,
        messages,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
}
