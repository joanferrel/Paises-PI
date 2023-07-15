const newPost = require("../utils/PostActivity");
const { getAllActivity } = require("../utils/dbHelper");
const deleteIdActivity = require("../utils/deleteIdActivity");
const ActivityUpdate = require("../utils/ActivityUpdate");

const postActivity = async (req, res) => {
  const { name, dificultad, duracion, tempodara, countryId } = req.body;
  const data = { name, dificultad, duracion, tempodara };

  try {
    const resp = await newPost(data, countryId);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ error });
  }
};


const getActivity = async (req, res) => {
  try {
    const resp = await getAllActivity();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const resp = await deleteIdActivity(+id);

    resp ? res.status(200).json(resp) : res.status(201).json(resp);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const { name, dificultad, duracion, tempodara, countryId } = req.body;

  try {
    const resp = await ActivityUpdate(id, name, dificultad, duracion, tempodara, countryId);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  postActivity,
  getActivity,
  deleteActivity,
  updateActivity,
};