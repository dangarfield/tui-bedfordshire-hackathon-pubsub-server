var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

// app.use(express.static(__dirname + '/bower_components'))
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
})
io.on('connection', function (client) {
  console.log('Client connected...')
})

let airportCodes = ['AAA', 'AAB', 'AAC', 'AAD', 'AAE', 'AAF', 'AAG', 'AAH', 'AAI', 'AAJ', 'AAK']

let id = 0

function publishSale () {
  setTimeout(function () {
    io.emit('sales', JSON.stringify({
      'id': id++,
      'source': airportCodes.sample(),
      'destination': airportCodes.sample()
    }))
    publishSale()
  },
  Math.floor(Math.random() * 1000) + 10)
}
publishSale()
server.listen(4200)

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)]
}
