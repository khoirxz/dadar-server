import express from "express";

import { getRecipes, getRecipe } from "../controllers/contents.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/details/:key", getRecipe);

export default router;
