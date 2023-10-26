import React from "react";
import Board from "./Compoents/Board";

function App() {
  return (
    // <div className="App">
    <div>
      <Board />
      {/* <Add /> */}
    </div>
  );
}

export default App;

function Add() {
  function sendAddRequest() {
    console.log("button has been pushed");

    submitAddRequest(7, 49).then((result) => {
      console.log(result);
    });
  }

  return <button onClick={sendAddRequest}>Push me</button>;
}

async function submitAddRequest(a: number, b: number): Promise<number> {
  const response = await fetch("http://localhost:8000/api/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ a: a, b: b }),
  });
  const data = await response.json();
  return data.sum as number;
}
