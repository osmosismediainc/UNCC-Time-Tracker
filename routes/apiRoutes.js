var db = require("../models");

module.exports = function(app) {
  // Find single Employee
  app.get("/api/view-employees/:userId/:empPassword", function(req, res) {
    db.Employee.findOne({
      where: {
        userId: req.params.userId,
        empPassword: req.params.empPassword
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  // Creates a time punch for current employee
  app.post("/api/newPunch", function(req, res) {
    var employeeId = parseInt(req.body.employeeId);
    db.TimePunch.create({
      include: [db.Employee],
      clockDate: req.body.clockDate,
      clockIn: req.body.clockIn,
      empLat: req.body.empLat,
      empLon: req.body.empLon,
      EmployeeId: employeeId
    }).then(function(dbNewTimePunch) {
      res.json(dbNewTimePunch);
      console.log("Successfully created!");
    });
  });

  app.post("/api/updatePunch", function(req, res) {
    db.TimePunch.findAll({
      limit: 1,
      where: {
        employeeId: req.body.employeeId
      },
      order: [["createdAt", "DESC"]]
    }).then(function(updatePunch) {
      res.json(updatePunch);
    });
  });

  // Create a new employee
  app.post("/api/new-employees", function(req, res) {
    console.log("hello post");
    db.Employee.create({
      userId: req.body.userId,
      empName: req.body.empName,
      empPassword: req.body.empPassword
    }).then(function(dbNewEmployee) {
      console.log("New employee created: ", dbNewEmployee);
      res.json(dbNewEmployee);
    });
  });

  // View Employees
  app.get("/api/employees", function(req, res) {
    db.Employee.findAll({}).then(function(dbViewEmployee) {
      res.json(dbViewEmployee);
    });
  });

  // Lists all time punches
  app.get("/api/punches", function(req, res) {
    db.TimePunch.findAll({}).then(function(view) {
      res.json(view);
    });
  });

  // 2; Add a join to include all of the Author's Posts here
  app.get("/api/employees/:id", function(req, res) {
    db.Employee.findOne({
      include: [db.TimePunch],
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Create a new Time
  app.post("/api/times", function(req, res) {
    db.TimePunch.create(req.body).then(function(dbTimePunch) {
      res.json(dbTimePunch);
    });
  });

  // Delete an Employee by id
  app.delete("/api/delEmployee/:id", function(req, res) {
    db.Employee.destroy({ where: { id: req.params.id } }).then(function(
      dbEmployee
    ) {
      res.json(dbEmployee);
    });
  });
};
