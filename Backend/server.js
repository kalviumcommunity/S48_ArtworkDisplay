require('dotenv').config();

// const express = require('express');
// const app = express();
// const port = 3001;
// const mongoose = require('mongoose');
// const mongoURI = process.env.MONGODB_URI;
// // const bodyParser = require('body-parser');
// // const routes = require('./routes')
// const cors = require('cors')
// const ArtworksModel = require('./models/Artworks')


// // app.get('/ping', (req, res) => {
// //   res.send("pong")
// // })
// app.use(cors())
// app.use(express.json())

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Error connecting to MongoDB:', err));

// app.get('/mongo', (req, res) => {
//   const connectionStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
//   res.send(`Database Connection Status: ${connectionStatus}`);
// });

// // Middleware for parsing JSON request body
// // app.use(bodyParser.json());

// // Use the combined routes and handlers
// // app.use('/', routes);

// app.get('/getArtworks', (req, res) => {
//   ArtworksModel.find()
//   .then(artworks => res.json(artworks))
//   .catch(err => res.json(err))
// })

// if (require.main === module) {
//   app.listen(port, () => {
//     console.log(`🚀 server running on PORT: ${port}`);
//   });
// }

// module.exports = app;


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express ()
const UserModel = require('./models/Users')
app.use(cors())
app.use(express.json())
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get("/getUser", (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id}, {
    name : req.body.name,
    email : req.body.email, 
    age : req.body.age
  })
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id}, {})
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.listen(3001, () =>{
  console.log("Server is running in 3001")
})

