const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const router = require('./router');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true,
}));

app.use('/', router);

app.listen(port, () => {
    console.log(`The server can receive request at: http://localhost:${port}`);
});