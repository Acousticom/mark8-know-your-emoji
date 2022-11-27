import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "🤑": "Money-mouth",
  "🤫": "Shushing ",
  "🤔": "Thinking ",
  "😏": "Smirling "
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "We don't have this emoji in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside out!!!</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h2>Emojis we know</h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{
              fontSize: "1.5rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
