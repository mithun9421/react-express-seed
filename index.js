var express = require("express")
var path = require("path")
var app = express();
const cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, "dist")))

let PORT = process.env.PORT || 4000
const APIBASEURL = process.env.APIBASEURL || "/api"
const WILDCARD = "*";

// Any api call will go thorough this
app.get(APIBASEURL, (req, res) => res.json({ username: 'Flavio' }))

// Index html served via express
app.get(WILDCARD, function (req, res) {
  res.sendFile("dist/index.html", { root: __dirname })
})

app.listen(PORT, () => {
  console.log(`App serving at http://localhost:${PORT}`)
})
