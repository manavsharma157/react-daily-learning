import { useState } from "react";
import "./index.css"; // make sure you import THIS file

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex gap-4 px-6 py-3 bg-gray-900/70 rounded-2xl shadow-lg backdrop-blur-md">
          <button
          onClick={() => setColor("red")}
            className="px-4 py-2 rounded-lg bg-red-500 text-white shadow"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={() => setColor("blue")}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={() => setColor("green")}
            className="px-4 py-2 rounded-lg bg-green-500 text-white shadow"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={() => setColor("purple")}
            className="px-4 py-2 rounded-lg bg-purple-500 text-white shadow"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
          onClick={() => setColor("orange")}
            className="px-4 py-2 rounded-lg bg-orange-500 text-white shadow"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
