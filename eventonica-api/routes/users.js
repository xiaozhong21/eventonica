const express = require('express');
const router = express.Router();

const users = [
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
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/add', function(req, res, next) {
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
});

module.exports = router;
