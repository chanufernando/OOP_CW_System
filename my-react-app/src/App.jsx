import React, { useState } from "react";
import ConfigurationForm from "./components/ConfigurationForm";
import ControlPanel from "./components/ControlPanel";
import LogDisplay from "./components/LogDisplay";
import TicketDisplay from "./components/TicketDisplay";

const App = () => {
  const [tickets, setTickets] = useState([]); // Ticket array
  const [config, setConfig] = useState({ ticketPrice: "", maxTickets: "" }); // Configuration object
  const [systemStatus, setSystemStatus] = useState("Stopped"); // System state
  const [logs, setLogs] = useState([]); // Logs array
  
  // States for signup and login forms
  const [signupVisible, setSignupVisible] = useState(false); // Toggle for signup form
  const [loginVisible, setLoginVisible] = useState(false); // Toggle for login form
  const [username, setUsername] = useState(""); // Username state
  const [password, setPassword] = useState(""); // Password state
  const [userData, setUserData] = useState([]); // Store users data for signup

  // Function to add tickets
  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
    setLogs([...logs, `Added ticket: ${ticket}`]);
  };

  // Function to update the configuration
  const updateConfig = (configData) => {
    setConfig(configData);
    setLogs([...logs, `Updated configuration: ${JSON.stringify(configData)}`]);
  };

  // Start and stop system handlers
  const startSystem = () => {
    setSystemStatus("Running");
    setLogs([...logs, "System started"]);
  };

  const stopSystem = () => {
    setSystemStatus("Stopped");
    setLogs([...logs, "System stopped"]);
  };

  // Toggle Signup form visibility
  const toggleSignup = () => setSignupVisible(!signupVisible);

  // Toggle Login form visibility
  const toggleLogin = () => setLoginVisible(!loginVisible);

  // Handle sign up
  const handleSignup = (e) => {
    e.preventDefault();
    setUserData([...userData, { username, password }]);
    setSignupVisible(false); // Hide the signup form after submission
    alert("Sign Up Successful!");
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const user = userData.find((user) => user.username === username && user.password === password);
    if (user) {
      alert("Login Successful!");
      setLoginVisible(false); // Hide the login form after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Ticket Management System</h1>

      {/* ConfigurationForm Component */}
      <ConfigurationForm updateConfig={updateConfig} />

      {/* Ticket Display */}
      <TicketDisplay tickets={tickets} />

      {/* Control Panel */}
      <ControlPanel startSystem={startSystem} stopSystem={stopSystem} />

      {/* Log Display */}
      <LogDisplay logs={logs} />

      {/* Add Ticket Button */}
      <div>
        <button
          onClick={() => addTicket("New Ticket")}
          style={{ background: "green", color: "white", margin: "5px" }}
        >
          Add Ticket
        </button>
      </div>

      {/* View Buttons for Customers, Vendors, and Admin */}
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            background: "blue",
            color: "white",
            margin: "5px",
            padding: "10px 20px",
          }}
        >
          View Admin
        </button>
        <button
          style={{
            background: "blue",
            color: "white",
            margin: "5px",
            padding: "10px 20px",
          }}
        >
          View Customers
        </button>
        <button
          style={{
            background: "blue",
            color: "white",
            margin: "5px",
            padding: "10px 20px",
          }}
        >
          View Vendors
        </button>
      </div>

      <p><strong>System Status:</strong> {systemStatus}</p>

      {/* Sign Up and Login Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={toggleSignup}
          style={{ background: "purple", color: "white", margin: "5px", padding: "10px 20px" }}
        >
          {signupVisible ? "Close Sign Up" : "Sign Up"}
        </button>
        <button
          onClick={toggleLogin}
          style={{ background: "purple", color: "white", margin: "5px", padding: "10px 20px" }}
        >
          {loginVisible ? "Close Login" : "Login"}
        </button>
      </div>

      {/* Sign Up Form (conditionally rendered) */}
      {signupVisible && (
        <form onSubmit={handleSignup} style={{ marginTop: "20px" }}>
          <h3>Sign Up</h3>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: "5px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "5px" }}
          />
          <button type="submit" style={{ background: "green", color: "white" }}>
            Submit
          </button>
        </form>
      )}

      {/* Login Form (conditionally rendered) */}
      {loginVisible && (
        <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
          <h3>Login</h3>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: "5px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "5px" }}
          />
          <button type="submit" style={{ background: "green", color: "white" }}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
