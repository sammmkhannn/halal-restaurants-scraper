import express from "express";
import cors from "cors";
import helmet from "helmet";
import hotelRoutes from "./src/routes/hotelRoutes.js";
import connect from "./src/utils/connect.js";
import {config} from 'dotenv';

config();

const PORT = process.env.PORT || 8800;

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
    process.env.MONGO_URI  );
})();
app.use("/api/v1/hotels", hotelRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
