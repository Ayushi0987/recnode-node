
const getProductFromId = (req, res) => {
    res.send('from the controller')
}

const getProductAbout = (req, res) => {
    res.send('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
}

module.exports ={
    getProductFromId,
    getProductAbout
}