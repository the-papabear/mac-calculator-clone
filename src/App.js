// import { useState } from "react";
import { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import TitleBar from "./TitleBar";
import Screen from "./Screen";
import Buttons from "./Buttons";

const App = () => {
  const [input, setInput] = useState("0");
  const buttonsRef = useRef(null);

  useEffect(() => buttonsRef.current.focus(), [buttonsRef]);

  return (
    <div autoFocus className="calculator">
      <TitleBar />
      <Screen result={input} />
      <Buttons input={input} setInput={setInput} reference={buttonsRef} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
