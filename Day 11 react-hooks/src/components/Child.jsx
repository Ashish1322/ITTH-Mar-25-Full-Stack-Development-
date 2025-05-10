import React, { useEffect } from "react";

function Child({ sayHello }) {
  useEffect(() => {
    console.log("Child component is Updating");
  });
  return <div>Child</div>;
}

export default React.memo(Child);
