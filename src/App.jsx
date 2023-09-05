import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>AMAZON BY INNOVATE SPACE</h1>
      <p>Name: Pinky</p>
      <h2 style={{color: "purple"}}>name: Osora</h2>
      <a href="https://www.youtube.com/watch?v=8Dd7KRpKeaE&pp=ygUUbGVhcm4gZ2l0IGFuZCBnaXRodWI%3D">
        LEARN GIT AND GITHUB FROM YOUTUBE
      </a>
    </>
  );
}

export default App;
