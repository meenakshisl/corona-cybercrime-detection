const express = require('express')
const app = express();
const hostname = '0.0.0.0';
const port = process.env.PORT || 3002;

const routes = require('./api/routes');
routes(app);
app.listen(port,hostname, function() {
   console.log('Server started on port: ' + port);
});


//http://localhost:3002/checkip/192.34.12.15
