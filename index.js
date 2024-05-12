const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req,res) => res.send('Hello World from dockers... Updated Version v2.0'));
app.listen(port, () => console.log(`### Server running at port ${port} ###`));