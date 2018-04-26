let express = require('express');
let app = express();

let count = 0;
app.get('/', function (req, res) {
    res.send('Hello World! test for openshift nodejs project - attempt: '+count++);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});