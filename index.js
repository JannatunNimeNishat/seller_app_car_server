const app = require('./app');
const port = 5003;

app.listen(port, () => {
    console.log('server is running at port: ', port);
})