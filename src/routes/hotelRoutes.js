import getAllHotels from "../controllers/getAllHotels.js";
import express from "express";
const router = express.Router();

router.get("/all", getAllHotels);

export default getAllHotels;
