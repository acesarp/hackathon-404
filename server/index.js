let express = require('express');
let app = express();
let port = process.env.PORT || '5001';
let router = express.Router();
const moods = require('./data/moods.json');

// 
router.get('/:id', (req, res) => {
    console.info(req.params);
    req.params.id;


    res.send();
});




const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${app.get('port')}`);
});