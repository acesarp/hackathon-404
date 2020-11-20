let express = require('express');
let app = express();
let cors = require('cors');
let path = require('path');
const port = process.env.PORT || '5001';
app.set('port', port);
let router = express.Router();
const moods = require('./moods.js');


app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/moods', moods);

app.listen(app.get('port'), () => {
    console.log(`App listening at http://localhost:${app.get('port')}`);
});

module.exports = app;