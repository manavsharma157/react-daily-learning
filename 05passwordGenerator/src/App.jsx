import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) string += "0123456789";
    if (symbolAllowed) string += "!@#$%^&*()_+[]{}|;:,.<>?/";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * string.length);
      pass += string[randomIndex];
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-md shadow-xl rounded-2xl px-6 py-8 border border-gray-700">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-400 tracking-wide">
          🔑 Password Generator
        </h2>

        {/* Password box */}
        <div className="flex items-center rounded-xl overflow-hidden mb-6 border border-gray-700 bg-gray-800">
          <input
            type="text"
            value={password}
            className="w-full py-3 px-4 bg-transparent text-white text-lg tracking-wider outline-none"
            placeholder="Password appears here..."
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white font-medium transition rounded-r-xl"
          >
            Copy
          </button>
        </div>

        {/* Controls Section */}
        <div className="space-y-5">
          {/* Length Slider */}
          <div>
            <label className="flex justify-between items-center text-sm text-gray-300 mb-2">
              <span>Password Length</span>
              <span className="text-orange-400 font-semibold">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full cursor-pointer accent-orange-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-3 text-gray-300">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500 cursor-pointer"
            />
            <label>Include Numbers</label>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <input
              type="checkbox"
              checked={symbolAllowed}
              onChange={() => setSymbolAllowed((prev) => !prev)}
              className="accent-orange-500 cursor-pointer"
            />
            <label>Include Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
