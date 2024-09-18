const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/people/:id/:storeId', (req, res) => {
    const params = req.params;
    console.log(params);
    res.send('evaluating')    
})

app.get('/users', (req, res) => {
    // fetch users from db
    const tempDbReturnedUser = {
        name: 'Ayushi',
        age: 22,
        hobbies: 'Coding'
    }
    res.json(tempDbReturnedUser)
})

app.get('/middleware-usage', 
    (req, res, next) => {
        //middleware -> manipulate the req
        console.log('I am currently in the middleware');
        req.manipulated = true;
        next();
    },
    (req, res) => {
        const didMiddlewareActuallyWork = req.manipulated;
        console.log(didMiddlewareActuallyWork);
        
        //Actual logic 
        console.log('I am the actual logic');
        res.send('Actual logic returned.')
    }
)

app.listen(PORT, () => {
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`);
})