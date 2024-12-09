import React, { useState } from "react";

const Configuration = ({ updateConfig }) => {
  const [totalTickets, setTotalTickets] = useState("");
  const [releaseRate, setReleaseRate] = useState("");
  const [retrievalRate, setRetrievalRate] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateConfig({ totalTickets, releaseRate, retrievalRate, maxCapacity });
    setTotalTickets("");
    setReleaseRate("");
    setRetrievalRate("");
    setMaxCapacity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Total Tickets:</label>
      <input
        type="number"
        value={totalTickets}
        onChange={(e) => setTotalTickets(e.target.value)}
        required
      />
      <label>ReleaseRate:</label>
      <input
        type="number"
        value={releaseRate}
        onChange={(e) => setReleaseRate(e.target.value)}
        required
      />
      <label>RetrievalRate (ms):</label>
      <input
        type="number"
        value={retrievalRate}
        onChange={(e) => setRetrievalRate(e.target.value)}
        required
      />
      <label>MaxCapacity:</label>
      <input
        type="number"
        value={maxCapacity}
        onChange={(e) => setMaxCapacity(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Configuration;
