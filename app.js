const express = require('express')
const app = express()
const port = 3000
// require express-handlebars
const exphbs = require('express-handlebars')

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.send('This is my movie list built with Express')
  res.render('index')
})

app.listen(port, () => {
  console.log(`the server is listening on localhost:${port}`)
})