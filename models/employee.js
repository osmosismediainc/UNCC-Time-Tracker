module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    userId: DataTypes.INTEGER,
    empName: DataTypes.STRING,
    empPassword: DataTypes.STRING,
    manager: DataTypes.BOOLEAN
  });

  Employee.associate = function(models) {
    // Associating Employee with TimePunch
    // When an Employee is deleted, also delete any associated time punches
    Employee.hasMany(models.TimePunch, {
      onDelete: "cascade"
    });
  };
  return Employee;
};
