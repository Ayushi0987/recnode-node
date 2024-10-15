const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.send('something')
})

router.get('/about', (req, res) => {
    console.log(req);
    res.send('about')
})

module.exports = router