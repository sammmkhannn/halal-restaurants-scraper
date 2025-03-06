import fs from "fs";

export default function appendDataToFile(filePath, data) {
  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error("Error appending data to file:", err);
    } else {
      console.log("Data successfully appended to file.");
    }
  });
}
