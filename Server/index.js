const connectToMongo = require("./DB");
const express = require('express')
var cors = require('cors');
// const cookieSession = require("cookie-session");


connectToMongo()

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// app.use('/api/adminAuth', require('./Routes/Admin'));
app.use('/api/userAuth', require('./Routes/User'));
app.use('/api/business', require('./Routes/Business'));
app.use('/api/customer', require('./Routes/Customer'));

app.listen(port, () => {
  console.log(`Inote-book listening at http://localhost:${port}`)
})

