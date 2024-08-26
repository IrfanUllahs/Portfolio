import { useEffect } from "react";

import "./App.css";
import Home from "./Pages/Home";

function App() {
  // useEffect(() => {
  //   // Disable right-click
  //   document.addEventListener("contextmenu", (e) => e.preventDefault());
  // }, []);
  // useEffect(() => {
  //   // Disable right-click
  //   document.addEventListener("contextmenu", (e) => e.preventDefault());

  //   // Disable F12, Ctrl+Shift+I, Ctrl+Shift+C, and other dev tools shortcuts
  //   document.addEventListener("keydown", (e) => {
  //     if (
  //       e.keyCode === 123 || // F12
  //       (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
  //       (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
  //       (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
  //       (e.ctrlKey && e.keyCode === 85) // Ctrl+U (View Source)
  //     ) {
  //       e.preventDefault();
  //     }
  //   });
  // }, []);
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
