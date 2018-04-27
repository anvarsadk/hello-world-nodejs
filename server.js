let express = require('express');
let server = express();

let count = 0;
server.get('/', function (req, res) {
    let mes = 'Hello World! test for openshift nodejs project 2 - attempt: '+count++;
    console.info(mes);
    res.send(mes);
});
server.listen(3000, function () {
    console.log('Example server listening on port 3000!');
});