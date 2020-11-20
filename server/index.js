let express = require('express');
let app = express();
let port = process.env.PORT || '5001';

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${app.get('port')}`);
});