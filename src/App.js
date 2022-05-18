import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const map = {
    "::happy::": "😀",
    "::sad::": "😢",
    "::smiley::": "😁",
  };

  const handleChange = (e) => {
    let { value } = e.target;

    var replace = new RegExp(Object.keys(map).join("|"), "gi");
    value = value.replace(replace, function (found) {
      return map[found];
    });

    setInput(value);
  };

  return (
    <div>
      <h1>Text to Emoji Converter</h1>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        style={{ padding: "10px", width: "80%^" }}
        placeholder="Type your text here to convert it into an emoji"
      />
    </div>
  );
};

export default App;
