let express = require('express');
let router = express.Router();
const moodList = require('./assets/moods.json');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

//
router.get('/', (req, res) => {
    
    console.log(moodList["mood-list"]);

    res.send(moodList["mood-list"]);
}); 

router.get('/:imageName', (req, res) => {
    console.info(req.params.imageName);

    res.sendFile(path.join(__dirname, `assets/images/${req.params.imageName}dog.jpg`));
});

router.get('/*', (req, res) => {
    res.send(
        '<h1>No mood found :( </h1><img src="./assets/images/saddog.jpg" />'
    );
});

module.exports = router;