import Hotel from "../models/Hotel.js";

const getAllHotels = async (req, res) => {
  try {
    let hotels = await Hotel.find({});
    return res
      .status(200)
      .send({ success: true, message: "All halal hotels", hotels });
  } catch (err) {
    return res
      .status(500)
      .send({ success: false, message: "Internal Server Error" });
  }
};

export default getAllHotels;
