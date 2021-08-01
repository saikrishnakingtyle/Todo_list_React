import { useState } from "react";
import "./styles.css";

export default function App() {
  const [onclick, setStyle] = useState(false);
  const [inputData, getInputData] = useState("");
  const [data, getData] = useState([]);
  function inputVal(event) {
    let x = event.target.value;
    getInputData(x);
  }
  function getVal() {
    getData((prev_Val) => {
      return [...prev_Val, inputData];
    });
  }
  function oncLick() {
    setStyle((prev_val) => {
      return !onclick;
    });
  }
  return (
    <div className="App">
      <h1 class="heading">ToDo List</h1>
      <input onChange={inputVal} className="inputt"></input>
      <button onClick={getVal}>Click</button>
      <div>
        {data.map((dat) => (
          <div className="dataitems">
            <input type="checkBox"></input>{" "}
            <p
              style={{ textDecoration: onclick ? "line-through" : "none" }}
              onClick={oncLick}
            >
              {dat}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
