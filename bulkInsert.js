import connect from "./src/utils/connect.js";
import Hotel from "./src/models/Hotel.js";
// import Hotels from "./hotels.json";
import fs from "fs";
function main() {
  connect(
    "mongodb+srv://admin:1990xe98@cluster0.b86j3.mongodb.net/halaldb?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then(() => {
      let hotels = fs.readFileSync("exhotels.json");
      hotels = JSON.parse(hotels);
      Hotel.insertMany(hotels).then((docs) => {
        console.log(docs.length + "documents inserted");
      });
    })

    .catch((err) => {
      console.log(err);
    });
}

main();
