const express = require('express');
const cors = require('cors');

const router = express.Router();
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: true }))


let users = [
  {
    id:"1",
    name: "Marlin", 
    email: "marlin@gmail.com"
  },
  {
    id: "2",
    name: "Nemo",
    email: "nemo@gmail.com" 
  },
  {
    id: "3",
    name: "Dory",
    email: "dory@gmail.com"  
  }
]


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json(users);
});

//Add new user
router.post('/add', (req, res, next) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(users);
});

//Delete an existing user
router.delete('/:deleteId', (req, res) => {
  const deleteId = req.params.deleteId;
  users = users.filter(user => user.id !== deleteId);
  res.send({ message: 'User deleted' });
});

module.exports = router;
