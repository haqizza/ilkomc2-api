const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
require ('dotenv/config');


mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => { console.log('connected to DB');
});

//Middlewares
app.use(cors());

//JSON handler
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Routes
app.use('/api/users/', userRouter);
//Start Listening
const port = 3000;

//Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/endpoint.html');
});

app.listen(process.env.PORT || port, () => {  console.log('We are live on ' + port);});
