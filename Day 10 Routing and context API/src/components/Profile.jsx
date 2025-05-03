import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { userid } = useParams();
  return (
    <div>
      <h1>Profile : {userid}</h1>
    </div>
  );
}
