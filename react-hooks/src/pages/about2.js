import React, { useContext } from "react";
import { UserContext2 } from "../UserContext2";

export function About2() {
  const { user } = useContext(UserContext2);
  return (
    <div>
      <h2>About2</h2>
      <pre>
        <div>{JSON.stringify(user, null, 2)}</div>
      </pre>
    </div>
  );
}
