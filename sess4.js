const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.text({type: 'text/*'}))
app.use(express.json())

app.get('/sum', (req, res)=>{
    //iterative
    const numArr = req.body;
    // console.log(numArr)
    if(numArr.length > 5){
        res.status(400).json({error: 'number length exceeded'})
    }
    try {
        let sum = 0;
        numArr.forEach(element => {
            sum+=element
        });

        res.status(200).json({sum, success: true})

    } catch (error) {
        res.status(400).json({error: 'something went wrong'})
    }
})

app.get('/try', (req, res)=>{
    console.log(req.body);
    res.send('abc')
})

app.listen(PORT, () => {
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`);
})