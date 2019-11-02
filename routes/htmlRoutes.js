// var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });
  // Route to Home View
  app.get("/home", function(req, res) {
    res.render("home", {});
  });

  // Route to Manager Add
  app.get("/addEmployee", function(req, res) {
    res.render("addEmployee", {});
  });

  // Route to View Employee
  app.get("/employeeList", function(req, res) {
    res.render("employeeList", {});
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
