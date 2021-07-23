import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Hello3 = React.memo(({ increment }) => {
  useCountRenders();

  return (
    <div>
      Hello 3 here!
      <button onClick={increment}>hello</button>
    </div>
  );
});
