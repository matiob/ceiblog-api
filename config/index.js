const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb+srv://Ceibo:Ceibo@ceiblog.rpm9ayf.mongodb.net/ceiblog", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB was connected successfully");
  } catch (error) {
    console.error("DB Conection Err-->", error.message);
    process.exit(1);
  }
};

db();