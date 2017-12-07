var express = require('express');
var router = express.Router();
var User = require("./user");

/**
 *  @swagger
 *  /:
 *    get:
 *      description: Home Page
 *      responses:
 *        200:
 *          description: Home Page with all registered users
 */
router.get('/', function(req, res) {
  User.find({}, function(err, allUsers){
    if (err) {
      console.log(err);
    } else {
      res.render('index', {users: allUsers});
    }
  });
});

/**
 *  @swagger
 *  /users:
 *    get:
 *      description: List of registered users
 *      responses:
 *        200:
 *          description: List of all registered users in a new tab and JSON array
 *    post:
 *      description: Post new user
 *      produces:
 *        - application/json
 *      consumes:
 *        - application/x-www-form-urlencoded
 *      parameters:
 *        - name: email
 *          description: Email of new user
 *          in: formData
 *          required: false
 *          type: string
 *        - name: first_name
 *          description: First name of new user
 *          in: formData
 *          required: false
 *          type: string
 *        - name: last_name
 *          description: Last name of new user
 *          in: formData
 *          required: false
 *          type: string
 *        - name: personal_phone
 *          description: Phone number of new user
 *          in: formData
 *          required: false
 *          type: string
 *      responses:
 *        200:
 *          description: user
 */
router.get('/users', function(req, res) {
  User.find({}).lean().exec(function(e, docs){
    res.json(docs);
    res.end();
  });
});

router.post("/users", function(req, res){
  var formData = req.body.user;
  User.create(formData , function(err){
    if (err) {
      console.log(err);
      res.render("new");
    } else {
      res.redirect("/");
    }
  });
});

/**
 *  @swagger
 *  /users/new:
 *    get:
 *      description: Form for new user
 *      responses:
 *        200:
 *          description: Get the form to register a new user
 */
router.get("/users/new", function(req, res) {
  res.render('new');
});

/**
 *  @swagger
 *  /users/:id/edit:
 *    get:
 *      description: Get form to edit user
 *      responses:
 *        200:
 *          description: Get the form to edit information of registered user
 */
router.get("/users/:id/edit", function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      res.render("edit", {user: foundUser});
    }
  });
});

/**
 *  @swagger
 *  /users/:id:
 *    get:
 *      description: Get one users
 *      responses:
 *        200:
 *          description: Get one user in a new tab and JSON array
 *    put:
 *      description: Update information of user
 *      produces:
 *        - application/json
 *      consumes:
 *        - application/x-www-form-urlencoded
 *      parameters:
 *        - name: email
 *          description: Email of user
 *          in: formData
 *          required: false
 *          type: string
 *        - name: first_name
 *          description: First name of user.
 *          in: formData
 *          required: false
 *          type: string
 *        - name: last_name
 *          description: Last name of user.
 *          in: formData
 *          required: false
 *          type: string
 *        - name: personal_phone
 *          description: Phone number of user.
 *          in: formData
 *          required: false
 *          type: string
 *      responses:
 *        200:
 *          description: user
 *    delete:
 *      description: Delete user
 *      responses:
 *        200:
 *          description: Delete registered user
 */
 router.get('/users/:id', function(req, res) {
   User.find({_id: req.params.id}).lean().exec(function(err, docs){
     if (err) {
       console.log(err);
       res.redirect("/");
     } else {
       res.json(docs);
       res.end();
     }
   });
 });

router.put("/users/:id", function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user, function(err){
    if (err) {
      console.log(err);
      res.redirect("/users/:id/edit");
    }
      res.redirect("/");
  });
});

router.delete("/users/:id",function(req, res){
  User.findByIdAndRemove(req.params.id, function(err){
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  });
});

//
module.exports = router;
