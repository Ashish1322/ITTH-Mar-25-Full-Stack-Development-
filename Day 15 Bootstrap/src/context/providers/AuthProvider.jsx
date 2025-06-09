import React, { useState } from "react";
import AuthContext from "../AuthContext";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import client from "../../socket";
export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, pass) => {
    setLoading(true);
    fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then(async (res) => {
        if (res.status == 200) {
          return res.json();
        }
        let response = await res.json();
        throw new Error(response["message"]);
      })
      .then((data) => {
        setLoading(false);
        setUser(data);
        // we will connect to websocket server
        client.connect();
        navigate("/chat");
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  const signup = (email, pass, name, gender) => {
    setLoading(true);
    fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
        name: name,
        gender: gender,
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
        setLoading(false);
        alert(
          "Account Created Successfully, Please verify your email with verficaiotn link sent"
        );
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  const uploadFile = (e) => {
    console.log("Uploading File");
    const file = e.currentTarget.files[0];
    const mydata = new FormData();
    mydata.append("photo", file);

    fetch(`${BASE_URL}/auth/profile/upload`, {
      method: "POST",
      headers: {
        authorization: user["accessToken"],
      },
      body: mydata,
    })
      .then(async (res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("Photo Uploaded", data);
        alert("Profile photo uploaded");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <AuthContext.Provider value={{ login, signup, loading, user, uploadFile }}>
      {children}
    </AuthContext.Provider>
  );
}
