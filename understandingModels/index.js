const mongoose = require('mongoose')
const User = require('./models/user.models')

mongoose.connect("mongodb://localhost/test121212")
    .then(()=> console.log('db successfully connected'))
    .catch((err)=> console.log(err))
const user1 = new User({rollNumber: 20, name: 'Ayushi', email: 'ayushijhinjhore1@gmail.com', age: 18});
user1.save().then(()=>{console.log('user created')});