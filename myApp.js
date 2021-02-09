var express = require('express');
var app = express();
app.get("/json", function(req, res) {
  let message = 'Hello json'
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.status(200).json({"message": message.toUpperCase()})
  }
  return res.status(200).json({"message": message})
})
