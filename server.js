require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;


app.get('/ping', (req, res) => {
  res.send("pong")
})

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
  const connectionStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.send(`Database Connection Status: ${connectionStatus}`);
});



if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
