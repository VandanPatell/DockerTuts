const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Hello World from dockers... Updated Version v2.0'));
app.listen(3000, () => console.log("### Server running at port 3000 ###"));