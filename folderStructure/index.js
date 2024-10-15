const express = require('express')
const app = express();
app.use(express.json()); //middleware to get the body

const sumController = require('./controller/sumController.js')

app.use('/', require('./routes/root.js'))
app.use('/product', require('./routes/product.js'))

app.use('/sum', sumController.sumTill5)

app.listen(3000, () => {
    // console.log(process)
    console.log(`server is up and running at port 3000`);
})