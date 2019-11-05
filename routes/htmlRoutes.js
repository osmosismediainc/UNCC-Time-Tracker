var db = require("../models");
// var retrievedUser = require("../public/assets/js/index");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });
  // Route to Home View
  app.get("/home", function(req, res) {
    db.Employee.findOne({
      where: {
        id: 3
      }
    }).then(function(data) {
      var userObject = {
        user: data
      };
      res.render("home", userObject);
      console.log(userObject);
    });
  });

  // Route to Manager Add
  app.get("/addEmployee", function(req, res) {
    res.render("addEmployee", {});
  });

  // Route to View Employee
  app.get("/employeeList", function(req, res) {
    db.Employee.findAll({}).then(function(data) {
      var users = {
        employee: data
      };
      res.render("employeeList", users);
<<<<<<< HEAD
      console.log(users.employee);
=======
      console.log(users.employee[0].id);
>>>>>>> b775cc2a9ace99a566f7960cd50e77b3b90ffced
    });
  });

  // Route to View Time
  app.get("/timePunches", function(req, res) {
    res.render("timePunches", {});
  });

  app.get("/timePunch", function(req, res) {
    res.render("timePunch", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
