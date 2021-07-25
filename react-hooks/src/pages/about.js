import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function About() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h2>About</h2>
      <div>{value}</div>
    </div>
  );
}
