// const express = require('express');
// const router = express.Router();

// // let users = [
// //     { id: 1, name: 'Arthi', email: 'arthi@kalvium.community' },
// //     { id: 2, name: 'Meera', email: 'meera@kalvium.community' }
// // ];

// // // Read (GET) all users
// // router.get('/users', (req, res) => {
// //     res.json(users);
// // });

// // Read (GET) a single user by ID
// // router.get('/users/:id', (req, res) => {
// //     const userId = parseInt(req.params.id);
// //     const user = users.find(user => user.id === userId);
// //     if (!user) {
// //         return res.status(404).json({ message: 'User not found' });
// //     }
// //     res.json(user);
// // });

// // // Create (POST) a new user
// // router.post('/users', (req, res) => {
// //     const { name, email } = req.body;
// //     const newUser = {
// //         id: users.length + 1, 
// //         name : 'Rutuj',
// //         email: 'rutuj@kalvium.community'
// //     };
// //     users.push(newUser);
// //     res.status(201).json(newUser);
// // });

// // // Update (PUT) an existing user
// // router.put('/users/:id', (req, res) => {
// //     const userId = parseInt(req.params.id);
// //     const userIndex = users.findIndex(user => user.id === userId);
// //     if (userIndex === -1) {
// //         return res.status(404).json({ message: 'User not found' });
// //     }
// //     const { name, email } = req.body;
// //     users[userIndex].name = name;
// //     users[userIndex].email = email;
// //     res.json(users[userIndex]);
// // });


// // // Delete (DELETE) a user by ID
// // router.delete('/users/:id', (req, res) => {
// //     const userId = parseInt(req.params.id);
// //     users = users.filter(user => user.id !== userId);
// //     res.json({ message: 'User deleted successfully' });
// // });

// router.get('/getArtworks', (req, res) => {

// })

// module.exports = router;
