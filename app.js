const express = require('express');
const cors = require('cors');
const Cars = require('./assets/cars.json');
const app = express();



app.use(cors());
app.use(express.json());




app.get('/search', (req, res) => {

    const searchValue = req.query.searchValue;

    if (searchValue) {
        const regex = new RegExp(searchValue, 'i');
        const searchedCars = Cars?.filter(car => regex.test(car?.model))
        return res.send({ data: searchedCars })
    }
    return res.send({ data: Cars })

})

app.get('/paginate', (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    // 
    const startIndex = (page - 1) * limit;
    const lastIndex = page * limit;

    const result = {};

    result.totalCars = Cars.length;

    result.data = Cars.slice(startIndex, lastIndex);
    res.send(result)

})

app.get('/', (req, res) => {
    res.send('server is running')
})




module.exports = app;