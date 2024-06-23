const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())

// app.get('/', (req,res) => res.send('Hello World from dockers... Updated Version v3.0'));
app.use(routes)

const port = process.env.PORT || 3000;

init().then(() => {
  console.log('======> DB initialized');
}).catch((err) => {
  console.error('====> Error Occured while initializing DB : ', err);
})

app.listen(port, () => console.log(`========> Server listening on port ${port}`))
