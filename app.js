const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser')
const routes = require ('./routes/routes');

const port = 3000;
const hostname = 'localhost';
const dbUrl = 'mongodb://127.0.0.1:27017/Zomato-60';
const DB = 'mongodb+srv://arjunsaxena122:cpO8Le7fmtaliYU6@cluster0.7tcizu9.mongodb.net/?retryWrites=true&w=majority'



const app = express();

app.use(bodyParser.json())
app.use ('/', routes);

mongoose.connect(atlasDbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
})

.then( res => {
    app.listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}:${port}`)
    });
})
.catch(err => console.log(err));