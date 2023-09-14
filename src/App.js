import "./App.css";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-{}[]|\":;'<>,.?/`~";

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <h1>Password Generator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          style={{ width: "400px" }}
        />
        <button>Copy Password</button>
      </div>

      <div>
        <div style={{ display: "flex" }}>
          <div>
            <input
              type="range"
              min={6}
              max={50}
              value={lenght}
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label>Lenght: {lenght}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((e) => !e);
              }}
            />
          </div>
          <label>Numbers</label>
          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((e) => !e);
              }}
            />
          </div>
          <label>Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
