import { useState } from "react";
import "./App.css";

import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Navbar, Welcome, Dock } from "#components";
import { Terminal ,Safari,Resume,Finder,Text,ImageWindowContent,Contact} from "#windows/index.js";

gsap.registerPlugin(Draggable);

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
        <Resume />
        <Finder />
        <Text/>
        <ImageWindowContent />
        <Contact/>
    </main>
  );
}

export default App;
