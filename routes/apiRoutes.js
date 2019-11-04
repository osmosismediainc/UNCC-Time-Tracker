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

  // Find single employees time
  // app.get("/api/times/:id", function(req, res) {
  //   db.TimePunches.findOne({
  //     include: [db.TimePunch],
  //     where: {
  //       userId: req.params.userId
  //     }
  //   }).then(function(dbEmployee) {
  //     res.json(dbEmployee);
  //   });
  // });

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
  app.get("/api/view-times/:id", function(req, res) {
    db.TimePunch.findAll({
      where: { TimePunch_id: req.params.id }
    }).then(function(dbViewTimes) {
      res.json(dbViewTimes);
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
