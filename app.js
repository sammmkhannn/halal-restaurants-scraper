import express from "express";
import cors from "cors";
import helmet from "helmet";
import hotelRoutes from "./src/routes/hotelRoutes.js";
import connect from "./src/utils/connect.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
(async () => {
  connect(
    "mongodb+srv://admin:1990xe98@cluster0.b86j3.mongodb.net/halaldb?retryWrites=true&w=majority&appName=Cluster0"
  );
})();
app.use("/hotels", hotelRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
