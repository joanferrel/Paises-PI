const { Activity } = require("../db");
const newPost = async (data, nameId) => {
  try {
    const newActivity = await Activity.create({
      name: data.name,
      dificultad: data.dificultad,
      duracion: data.duracion,
      tempodara: data.tempodara,
    });

    await newActivity.setCountries(nameId);
    return newActivity;
  } catch (error) {
    console.error("Error nose creo la nueva actividad:", error);
    throw error;
  }
};

module.exports = newPost;