import { useState } from "react";
import Btn from "./COMPONENTS/Controls.jsx";

const Registration = () => {
  const [name, setName] = useState("");
  const [tell, setTell] = useState("");
  const [result, setResult] = useState("");

  const save = async () => {
    try {
      const response = await fetch("http://localhost:3001/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, tell }),
      });

      const data = await response.json();
      setResult(data.message || "Saved successfully");
    } catch (error) {
      console.error(error);
      setResult("Error sending data. Is the backend running?");
    }
  };

  return (
    <div>
      <p>
        name: {" "}
        <input
          type="text"
          name="txt1"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        tell: {" "}
        <input
          type="text"
          name="txt2"
          placeholder="Enter your tell"
          value={tell}
          onChange={(e) => setTell(e.target.value)}
        />
      </p>
      <Btn onClick={save}>Save</Btn>
      <p>{result}</p>
    </div>
  );
};

export default Registration;