import axios from "axios";
import * as api from "../api/api.js";

export const getRecipes = async (req, res) => {
  try {
    const { data } = await api.fetchPosts();

    res.send(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const getRecipe = async (req, res) => {
  const { key } = req.params;

  try {
    const { data } = await api.fetchPost(key);

    res.send(data.results);
  } catch (error) {
    console.log(error);
  }
};
