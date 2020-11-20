<<<<<<< HEAD
let express = require("express");
let app = express();
=======
let express = require('express');
let app = express();
let cors = require('cors');
let path = require('path');
let port = process.env.PORT || '5001';
let router = express.Router();
const moods = require('./data/moods.json');


app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 
router.get('/:id', (req, res) => {
    console.info(req.params);
    
    const payload = moods.filter(value => value.id === req.params.id)
    res.send(payload);
});


const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${app.get('port')}`);
});

    module.exports = app;
>>>>>>> 921807c1fa3b632037825eddd34b4ecb4baec60d
