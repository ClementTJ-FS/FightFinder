// get the express application
const app = require('./app');
require('dotenv').config();
// set the port to environment variable or 4000
// Changing from port 3000, because that's the default for React!
const port = process.env.PORT || 5000;
// spin up server
app.listen(port, () => console.log(`API listening on port ${port}!`));
