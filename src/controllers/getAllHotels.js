import Hotel from "../models/Hotel.js";

const getAllHotels = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 hotels per page if not provided
    const skip = (page - 1) * limit;

    const hotels = await Hotel.find({}).skip(skip).limit(limit);
    const totalHotels = await Hotel.countDocuments({});

    return res.status(200).send({
      success: true,
      message: "All halal hotels",
      hotels,
      totalPages: Math.ceil(totalHotels / limit),
      currentPage: page,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default getAllHotels;
