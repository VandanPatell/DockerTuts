const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Hello World from dockers... Updated Version'));
app.listen(3000, () => console.log("### Server running at port 3000 ###"));