const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Route to configure the system
app.post('/api/configure', (req, res) => {
    // Here, we expect the frontend to send configuration data (like totalTickets, etc.)
    console.log('Configuration received:', req.body);  // This will log the data sent from frontend

    // Respond to the frontend with a success message
    res.status(200).send('System configured successfully.');
});

// Route to start the system
app.post('/api/start', (req, res) => {
    // Logic to start the ticketing process
    // For now, we just send a success message
    console.log('System started!');
    res.status(200).send('System started.');
});

// Route to check system status
app.get('/api/status', (req, res) => {
    res.status(200).json({
        totalAdded: 10,
        totalSold: 5,
        currentTickets: 5
    });
});

// Route to stop the system
app.post('/api/stop', (req, res) => {
    // Logic to stop the system (in this example, it's just a success message)
    console.log('System stopped!');
    res.status(200).send('System stopped.');
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
