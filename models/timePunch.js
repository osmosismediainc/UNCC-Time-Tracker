module.exports = function(sequelize, DataTypes) {
  var TimePunch = sequelize.define("TimePunch", {
    empName: DataTypes.STRING,
    clockDate: DataTypes.DATEONLY,
    clockIn: DataTypes.TIME,
    clockOut: DataTypes.TIME,
    empLat: DataTypes.DECIMAL,
    empLon: DataTypes.DECIMAL
  });
  TimePunch.associate = function(models) {
    // We're saying that a TimePunch should belong to an Employee
    // A TimePunch can't be created without an Employee due to the foreign key constraint
    TimePunch.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return TimePunch;
};
