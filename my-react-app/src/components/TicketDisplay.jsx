import React from "react";

const TicketDisplay = ({ tickets }) => {
  return (
    <div>
      <p>Tickets Available: {tickets.length}</p>
    </div>
  );
};

export default TicketDisplay;
