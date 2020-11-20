let express = require('express');
let app = express();
let port = process.env.PORT || '5001';
let router = express.Router();


// 
router.get('/', (req, res) => {

    

    res.send();
});




const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${app.get('port')}`);
});