var db = require("../models");
// var retrievedUser = require("../public/assets/js/index");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });
  // Route to Home View
  app.get("/home/:id", function(req, res) {
    db.Employee.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      var userObject = {
        user: data
      };
      res.render("home", userObject);
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
    });
  });

  // Route to View Time
  app.get("/timePunches", function(req, res) {
    res.render("timePunches", {});
  });

  app.get("/timePunch/:id", function(req, res) {
    db.Employee.findOne({
      include: [db.TimePunch],
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployee) {
      res.render("timePunch", dbEmployee);
      console.log("This is Employee" + dbEmployee.TimePunches);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
