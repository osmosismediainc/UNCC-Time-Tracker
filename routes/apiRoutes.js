var db = require("../models");

module.exports = function(app) {
  // Find single Employee
  app.get("/api/employee/:userId/:empPassword", function(req, res) {
    db.Employee.findOne({
      where: {
        userId: req.params.userId,
        empPassword: req.params.empPassword
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  // Create a new employee
  app.post("/api/new-employees", function(req, res) {
    db.Employee.create(req.body).then(function(dbNewEmployee) {
      res.json(dbNewEmployee);
    });
  });

  // View Employees
  app.get("/api/view-employees", function(req, res) {
    db.Employee.findAll({}).then(function(dbViewEmployee) {
      res.json(dbViewEmployee);
    });
  });

  // View single employee's times
  app.get("/api/view-times", function(req, res) {
    var query = {};
    if (req.query.user_Id) {
      query.UserId = req.query.user_Id;
    }
    db.Post.findAll({
      where: query
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Create a new Time
  app.post("/api/times", function(req, res) {
    db.TimePunch.create(req.body).then(function(dbTimePunch) {
      res.json(dbTimePunch);
    });
  });

  // Delete an Employee by id
  app.delete("/api/employees/:userId", function(req, res) {
    db.Employee.destroy({ where: { id: req.params.id } }).then(function(
      dbEmployee
    ) {
      res.json(dbEmployee);
    });
  });
};
