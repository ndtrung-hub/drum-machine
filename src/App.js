import "./App.css";

import { useEffect, useState } from "react";

const KEYS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

function App() {
  const [bank, setBank] = useState(bankOne);
  const [sound, setSound] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

    script.async = true;
    document.body.appendChild(script);

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.body.removeChild(script);
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  function handleKeyPress(event) {
    console.log(KEYS.indexOf(event.key.toUpperCase()) != -1);
    if (KEYS.indexOf(event.key.toUpperCase()) !== -1) {
      setSound((prev) => [...prev, event.key.toUpperCase()]);
      playAudio(event.key.toUpperCase());
    }
  }

  function playAudio(id) {
    let temp = document.getElementById(id);
    temp.play(id);
  }

  return (
    <div className="App" id="drum-machine">
      <div id="display">
        <div id="row-container">
          {bank.map((item, index) => {
            return (
              <button
                className="drum-pad"
                key={item.keyTrigger + index}
                id={"pad_" + item.keyTrigger}
                onClick={() => {
                  setSound((prev) => [...prev, item]);
                  playAudio(item.keyTrigger);
                }}
              >
                <h3>{item.keyTrigger}</h3>
                <audio className="clip" id={item.keyTrigger} src={item.url} />
              </button>
            );
          })}
        </div>
        <p>{sound.length > 0 && sound[sound.length - 1].id}</p>
      </div>
    </div>
  );
}

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

export default App;
