const express = require ('xpress');

const app = express()
const port = 3000

app.get('/', function (req,  res){
    res.send('Hello Magic World')
})

app.listen(port, function () {
    console.log(`Server running on PORT: ${port}`);
  });