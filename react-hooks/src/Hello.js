import React, { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    console.log("HELLO HERE!");

    return () => {
      console.log("HELLO IS GONE!");
    };
  }, []);

  return <div>HELL(O)!</div>;
};
