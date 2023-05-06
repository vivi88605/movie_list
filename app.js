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
  //create variable to store movie1
  const movie1 = {
    id: 1,
    title: 'Jurassic World: Fallen Kingdom',
    image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
  }
  res.render('index', { movie: movie1 })
})

app.listen(port, () => {
  console.log(`the server is listening on localhost:${port}`)
})