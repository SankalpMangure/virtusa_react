import React, { useState } from "react";

function App() {
  let [output_a, setOutputA] = useState("");
  let [output_b, setOutputB] = useState("");

  function output(e) {
    const a_arr = output_a.split("");
    const b_arr = output_b.split("");
    var final_a = [];
    var final_b = [];
    for (let i = 0; i < a_arr.length; i++) {
      var count = 0;
      for (let j = 0; j < b_arr.length; j++) {
        if (!count) {
          if (a_arr[i] === b_arr[j]) {
            count += 1;
          }
        }
      }
      if (!count) {
        final_a.indexOf(a_arr[i]) === -1 && final_a.push(a_arr[i]);
      }
    }
    document.getElementById("op1").innerHTML = final_a.join('');

    for (let i = 0; i < b_arr.length; i++) {
      var count2 = 0;
      for (let j = 0; j < a_arr.length; j++) {
        if (b_arr[i] === a_arr[j]) {
          count2 += 1;
        }
      }
      if (!count2) {
        final_b.indexOf(b_arr[i]) === -1 && final_b.push(b_arr[i]);
      }
    }
    document.getElementById("op2").innerHTML = final_b.join('');
  }

  return (
    <div className="App">
      <div className="row form-inline justify-content-center mt-5">
        <div className="form-group mb-2">
          <label htmlFor="input1" className="sr-only">Input 1</label>
          <input type="text" className="form-control" id="input1" placeholder="Input 1" value={output_a} onChange={(e) => { setOutputA(e.target.value) }} />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="input2" className="sr-only">Input 2</label>
          <input type="text" className="form-control" id="input2" placeholder="Input 2" value={output_b} onChange={(e) => { setOutputB(e.target.value) }} />
        </div>
        <button type="button" className="btn btn-primary mb-2" onClick={(e) => { output(e); }}>Output</button>
      </div>
      <div className="row justify-content-center">
        <p><label>Output 1 :- </label><span id="op1"></span></p>
      </div>
      <div className="row justify-content-center">
        <p><label>Output 2 :- </label><span id="op2"></span></p>
      </div>
    </div>
  );
}
export default App;
