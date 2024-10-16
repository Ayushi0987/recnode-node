const User = require('../models/user.models')

async function createUser(req, res){
    const {rollNumber, name, status, email, age} = req.body
    //work with your User model
    try {
        const newUser = new User({rollNumber, name, status, email, age});
        const result = await newUser.save()
        console.log('user saved');
        res.status(201).json({message: 'user created successfuly', status: 'success', data: result})
    } catch (err) {
        res.status(404).json({message: 'something went wrong', status: 'failure', error: err})
    }
}

async function getAllUser(req, res) {
    try {
        const allUsers = await User.find();
        res.status(201).json({message: 'user fetched successfuly', status: 'success', data: allUsers})
    } catch (err) {
        res.status(500).json({message: 'something went wrong', status: 'failure', error: err})
    }   
}

async function getUserById(req, res) {
    const {userId} = req.params;
    try {
        const user = await User.findById(userId);
        //error prone path
        if(!user){
            return res.status(400).json({message: 'invalid user id', status: 'failure', error: 'invalid user id'})
        }
        return res.status(200).json({message: 'user fetched successfuly', status: 'success', data: user})
    } catch (err) {
        res.status(500).json({message: 'something went wrong', status: 'failure', error: err})
    }
}

module.exports = {createUser, getAllUser, getUserById}
