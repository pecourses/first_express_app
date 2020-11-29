const express = require('express');
const {validate} = require('./middleware');
const userController = require('./controllers/user.controller');
// 1 node moduls API
// 2 npm
// 3 *.js
// 4.1 package.json main
// 4.2 index.js

const app = express();

app.use(express.json());

app.get('/', (req, res) => { console.log(`Get handler is running. Request from url: "${req.path}"`); })

//const bodyParser = express.json();//req.body

app.post('/signup',
  validate.signUpValidate,//validate
  userController.signUpUser
)

app.post('/login', userController.loginUser)

app.use((error, req, res, next)=>{
  res.status(500).send(error);
})

//app.put('/users/user', (req, res) => { res.status(201).send(req.body); } )

module.exports = app;