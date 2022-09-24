import React, { useState } from "react";
import "../Styles/Counter.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementHandle = () => {
    setCounter(counter + 1);
  };

  const decrementHandle = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <IconButton
        disabled={counter === 0}
        onClick={decrementHandle}
        color="inherit"
      >
        <RemoveIcon className="counter__btn" />
      </IconButton>

      <h1>{counter}</h1>

      <IconButton onClick={incrementHandle} color="inherit">
        <AddIcon className="counter__btn" />
      </IconButton>
    </div>
  );
}

export default Counter;
