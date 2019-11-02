module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    userId: DataTypes.INTEGER,
    empName: DataTypes.STRING,
    password: DataTypes.STRING,
    manager: DataTypes.BOOLEAN
  });

  Employee.associate = function(models) {
    // Associating Employee with TimePunch
    // When an Employee is deleted, also delete any associated Posts
    Employee.hasMany(models.TimePunch, {
      onDelete: "cascade"
    });
  };

  return Employee;
};
