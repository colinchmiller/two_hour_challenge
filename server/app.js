/**
 * Created by colinmiller on 11/12/15.
 */
var express = require('express');
var app = express();
var path = require('path');

app.set("port", process.env.PORT || 5000);

app.get("/*", function(req, res){
   var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file))
});

app.listen(app.get("port"), function(req, res){
    console.log("Take a listen on port: ", app.get("port"));
});