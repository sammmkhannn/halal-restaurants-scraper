import Hotel from "../models/Hotel.js";
import fs from "fs";
import writeData from "./writeData.js";
export default async function store(hotels) {
  try {
    fs.writeFileSync("hotels.json", JSON.stringify(hotels));
  } catch (err) {
    console.log(err);
  }
}
