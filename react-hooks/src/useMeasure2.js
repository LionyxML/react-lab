import { useState, useRef, useLayoutEffect } from "react";

export const useMeasure2 = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
  }, deps);

  return [rect, myRef];
};
