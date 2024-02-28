require('dotenv').config();

const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
const bodyParser = require('body-parser');
// const routes = require('./routes')
const cors = require('cors')
const ArtworksModel = require('./models/Artworks')


// app.get('/ping', (req, res) => {
//   res.send("pong")
// })
app.use(cors())
app.use(express.json())

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/mongo', (req, res) => {
  const connectionStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.send(`Database Connection Status: ${connectionStatus}`);
});

// Middleware for parsing JSON request body
// app.use(bodyParser.json());

// Use the combined routes and handlers
// app.use('/', routes);

app.get('/getArtworks', (req, res) => {
  ArtworksModel.find()
  .then(artworks => res.json(artworks))
  .catch(err => res.json(err))
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
