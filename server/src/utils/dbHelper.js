const { Country, Activity } = require("../db");


const getAllData = async () => {
  try {
    const allCountries = await Country.findAll({
      include: [Activity],
    });


    return allCountries; 
  } catch (error) {
    throw new Error("Error al obtener los datos de la base de datos");
  }
};


const getAllActivity = async () => {
  try {
    const allActivity = await Activity.findAll({
      include: [Country], 
    });

    return allActivity;
  } catch (error) {
    throw new Error("Error al obtener los datos de la base de datos");
  }
};

module.exports = {
  getAllData,
  getAllActivity,
};