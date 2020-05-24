const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('cors')
server.use(allowCors())

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

const url = 'http://localhost:3003/api/todos'

server.options('${url}/${todo._id}',allowCors())
server.delete('${url}/${todo._id}',allowCors(),function(req,res,next){
  res.json({msg:'This is CORS-enabled for all origins!'})
})

server.listen(port, function(){
  console.log("BACKEND is running on port " + port)
})

module.exports = server
