import "./App.css";

import React, { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const map = {
    "::happy::": "😀",
    "::sad::": "😢",
    "::smiley::": "😁",
  };

  useEffect(() => {
    let arr = input.split(" ");
    setInput(arr.map((el) => (map[el] ? map[el] : el)).join(" "));
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Text to Emoji Converter</h1>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        style={{ padding: "10px", width: "80%" }}
        placeholder="Type your text here to convert it into an emoji"
      />
    </div>
  );
};

export default App;
