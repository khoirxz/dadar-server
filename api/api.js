import axios from "axios";

const API = axios.create({
  baseURL: "https://masak-apa-tomorisakura.vercel.app",
});

export const fetchPosts = () => API.get("api/recipes");
export const fetchPost = (key) => API.get(`api/recipe/${key}`);
