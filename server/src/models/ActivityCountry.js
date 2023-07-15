const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ActivityCountries", {
    countryId:{
        type: DataTypes.ARRAY(DataTypes.STRING), 
        allowNull: false,
        defaultValue: [] 
    }
  });
};