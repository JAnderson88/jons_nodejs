const express = require("express");
const fetch = require("node_fetch")
const path = require('path');
const app = express();

app.post('/postToAuthorize', function(req, res){
  // let cc12 = ""
  let cc4 = ""
  // fetch('').then(res => { return res.text();}).then(data => {
  //   cc12 = JSON.parse(data)
  // });
  fetch('').then(res => { return res.text();}).then(data => {
    cc4 = JSON.parse(data)
  });

})

app.listen(8000, () => console.log('app listening on port 8000'));