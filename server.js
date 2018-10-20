var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var path = require('path')
var fs = require('fs')

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
io.on('connection', function (client) {
  console.log('Client connected...')
})

let routes = JSON.parse(fs.readFileSync('routes.json'))
let id = 0

function sample (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function publishSale () {
  if (id > 1000000000) {
    id = 0
  }
  setTimeout(function () {
    let route = sample(routes)
    io.emit('sales', JSON.stringify({
      'id': id++,
      'source': route.source,
      'destination': route.destination
    }))
    publishSale()
  },
  Math.floor(Math.random() * 1000) + 10)
}
publishSale()
server.listen(4200)
