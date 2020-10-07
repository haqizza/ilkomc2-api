const express = require('express');
const router  = express.Router();
const User = require('../models/UserModel');

// Create a user
router.post('/', async (req,res) => {
  // const user = new User({
  //   name: req.body.name,
  //   profession: req.body.profession,
  //   birthday: req.body.birthday,
  //   address: req.body.address,
  //   city: req.body.city,
  //   phoneNumber: req.body.phoneNumber,
  //   email: req.body.email,
  //   photo: req.body.photo,
  //   bio: req.body.bio,
  //   education: req.body.education,
  //   achievement: req.body.achievement,
  //   portfolio: req.body.portfolio
  // });

  try{
    // const savedUser = await user.save();
    const savedUser = await User.create(req.body);
    res.json(savedUser);
  }catch(err){
    res.json({ message: err });
  }
  
});

//Get all user
router.get('/', async (req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  }catch(err){
    res.json({ message: err });
  }
});

// Get spesific user
router.get('/:userId', async (req,res) => {
  try{
    const user = await User.findById(req.params.userId);
    res.json(user);
  }catch(err){
    res.json({ message: err });
  }
});

//Delete user
router.delete('/:userId', async (req,res) => {
  try{
    const removedPost = await User.remove({_id: req.params.userId});
    res.json(removedPost);
  }catch(err){
    res.json({ message: err });
  }
});

//Update user
router.patch('/:userId/', async (req,res) => {
  try{
    const updatedUser = await User.updateOne(
      {_id: req.params.userId}, 
      {$set: {name: req.body.name}}
    );
    res.json(updatedUser);
  }catch(err){
    res.json({ message: err });
  }
});

module.exports = router;