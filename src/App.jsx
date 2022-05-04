import React, { useState, useCallback, useMemo } from "react";
import ChildArea from "./ChildArea";
import "./styles.css";

const App = () => {
  console.log("App");

  const [text, setText] = useState(0);
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};

export default App;
