import React from "react";
import "./App.css";
import { TextField } from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="Hello!"
        person={{ firstName: "foo", lastName: "bar" }}
        handleChange={(e) => e.target}
      />
    </div>
  );
};

export default App;
