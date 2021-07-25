import React, { useContext } from "react";
import { UserContext2 } from "../UserContext2";
import { login } from "../utils/login";

export function Index2() {
  const { user, setUser } = useContext(UserContext2);
  return (
    <div>
      <h2>Home2</h2>
      <pre>
        <div>{JSON.stringify(user, null, 2)}</div>
      </pre>
      {user ? (
        <button
          onClick={() => {
            // call func logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
