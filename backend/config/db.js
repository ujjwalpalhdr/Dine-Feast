import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ujjwalpalhdr:25119554@cluster0.ifk9h0e.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
