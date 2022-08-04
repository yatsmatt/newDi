import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((helloRes) => console.log("hello", helloRes));
  }, []);
  return <h2>Home hello</h2>;
}

export default App;
