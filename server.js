let express = require('express');
let server = express();

let count = 0;
server.get('/', function (req, res) {
    res.send('Hello World! test for openshift nodejs project - attempt: '+count++);
});
server.listen(3000, function () {
    console.log('Example server listening on port 3000!');
});