require('dotenv').config()
var express = require("express")
var path = require("path")
var app = express();
const cors = require('cors')
var apis = require('./express-apis/hello-world');
console.log("Env ", process.env.NODE_ENV);
const ENVIRONMENT = (process.env.NODE_ENV || "DEVELOPMENT").toLowerCase();
app.use(cors())

app.use(express.static(path.join(__dirname, "dist")))

let PORT = process.env.PORT || 4000
const APIBASEURL = process.env.APIBASEURL || "/api"
const WILDCARD = "*";

app.use(APIBASEURL, apis);

// Index html served via express
if (ENVIRONMENT == "development") {
  app.get(WILDCARD, function (req, res) {
    res.sendFile("dist/index.html", { root: __dirname })
  })
}

app.listen(PORT, () => {
  console.log(`App serving at http://localhost:${PORT}`)
})
