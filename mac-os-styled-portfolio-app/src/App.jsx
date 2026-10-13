import { useState } from "react";
import "./App.css";
import { Navbar, Welcome, Dock } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Terminal } from "#windows/index.js";

gsap.registerPlugin(Draggable);

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
}

export default App;
