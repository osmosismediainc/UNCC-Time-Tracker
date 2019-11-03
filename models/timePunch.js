module.exports = function(sequelize, DataTypes) {
  var TimePunch = sequelize.define("TimePunch", {
    empName: DataTypes.STRING,
    clockDate: DataTypes.DATEONLY,
    clockIn: DataTypes.TIME,
    clockOut: DataTypes.TIME,
    employeeId: DataTypes.INTEGER
  });
  TimePunch.associate = function(models) {
    // We're saying that a TimePunch should belong to an Author
    // A TimePunch can't be created without an Author due to the foreign key constraint
    TimePunch.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });

    return TimePunch;
  };
};
