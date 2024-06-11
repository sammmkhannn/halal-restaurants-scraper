import mongoose from "mongoose";

export default async function connect(url) {
  try {
    mongoose.connect(url, { useNewUrlParser: true });
    let conn = mongoose.connection;
    conn
      .once("open", () => {
        console.log("connected to the database");
      })
      .on("error", (err) => {
        console.log(err.message);
      })
      .on("close", () => {
        console.log("connection has been closed");
      });
  } catch (err) {
    console.log(err);
  }
}
