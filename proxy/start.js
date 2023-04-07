const app = require('./server.js');
var config = require('./config.js');

app.listen(config.get("PROXY_PORT"), () => {
    console.log(`Server start at localhost:${config.get("PROXY_PORT")}`);
});