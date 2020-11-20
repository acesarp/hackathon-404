let express = require('express');
let router = express.Router();
const moodList = require('./assets/moods.json');
const { v4: uuidv4 } = require('uuid');

//
router.get('/', (req, res) => {
    
    console.log(moodList["mood-list"]);

    res.send(moodList["mood-list"]);
}); 

router.get('/:id', (req, res) => {
    console.info(req.params.id);
    console.log(uuidv4);
    //const payload = moodList.filter(value => value.id === req.params.id);
    //res.send(payload);
});

router.get('/*', (req, res) => {
    res.send(
        '<h1>No mood found :( </h1><img src="./assets/images/saddog.jpg" />'
    );
});

module.exports = router;