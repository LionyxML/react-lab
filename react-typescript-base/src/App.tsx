import React from "react";
import "./App.css";
import Counter from "./Counter";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <div>
        <TextField
          text="Hello!"
          person={{ firstName: "foo", lastName: "bar" }}
          // handleChange={(e) => e.target}
        />
      </div>

      <div>
        <Counter>
          {({ count, setCount }) => (
            <div>
              {count}
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          )}
        </Counter>
      </div>
    </div>
  );
};

export default App;
