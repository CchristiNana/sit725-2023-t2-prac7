let express = require('express');
let app = express();
let port = process.env.port || 3000;
const client = require('./dbConnection');  // Import the client object
let router = require('./routers/router');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.listen(port, () => {
    console.log("App listening to: " + port);
});


module.exports = app;