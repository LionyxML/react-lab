import React from "react";

import { useCount } from "../../context/Count";

export default function Display() {
  const { count } = useCount();

  return (
    <span>
      <b>Count: {count}</b>
    </span>
  );
}
