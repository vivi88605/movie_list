// const http = require('http')
const express = require('express')
const app = express()
// const hostname = 'localhost'
const port = 3000

app.get('/', (req, res) => {
  res.send('This is my movie list built with Express')
})
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html')
//   res.end(``)
// })

app.listen(port, () => {
  console.log(`the server is listening on localhost:${port}`)
})
// server.listen(port, hostname, () => {
//   console.log(`the server is listening on ${hostname}:${port}`)
// })