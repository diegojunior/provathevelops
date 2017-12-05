var express = require('express');
var router = express.Router();
var User = require("../models/user");

//GET HOME PAGE
router.get('/', function(req, res) {
  User.find({}, function(err, allUsers){
    if (err) {
      console.log(err);
    } else {
      res.render('index', {users: allUsers});
    }
  });
});

//GET ALL CUSTOMERS (JSON)
router.get('/users', function(req, res) {
  User.find({}).lean().exec(function(e, docs){
    res.json(docs);
    res.end();
  });
});

//GET NEW USER PAGE
router.get("/users/new", function(req, res) {
  res.render('new');
});

//POST NEW USER
router.post("/users", function(req, res){
  var formData = req.body.user;
  User.create(formData , function(err, user){
    if (err) {
      console.log("DEU RUIM NA CRIAÇÃO DO USER!!");
      console.log(err);
      res.render("new");
    } else {
      console.log("NEW USER!");
      res.redirect("/");
    }
  });
});

//GET EDIT USER PAGE
router.get("/users/:id/edit", function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    if (err) {
      res.redirect("/");
    } else {
      res.render("edit", {user: foundUser});
    }
  });
});

//UPDATE USER
router.put("/users/:id", function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user, function(err, updateUser){
    if (err) {
      console.log(err);
      console.log("ERRO NO UPDATE!");
    }
      res.redirect("/");
  });
});

//DELETE USER
router.delete("/users/:id",function(req, res){
  User.findByIdAndRemove(req.params.id, function(err){
    if (err) {
      console.log("DEU ERRO PRA DELETAR!!!!!!");
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  });
});

//

module.exports = router;
