require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products', router)

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
