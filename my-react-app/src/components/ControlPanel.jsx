import React from "react";

const ControlPanel = ({ startSystem, stopSystem }) => {
  return (
    <div>
      <button
        onClick={startSystem}
        style={{ background: "green", color: "white", margin: "5px" }}
      >
        Start
      </button>
      <button
        onClick={stopSystem}
        style={{ background: "red", color: "white", margin: "5px" }}
      >
        Stop
      </button>
    </div>
  );
};

export default ControlPanel;
