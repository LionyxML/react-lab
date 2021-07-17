import React, { useRef } from "react";

export const Hello2 = () => {
  const renders = useRef(0);
  renders.current++;

  return <div>HELLO2 was called {renders.current} times</div>;
};
