import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://antenehkasse:vXvTz7E80BwuKtRK@selam.qumia.mongodb.net/SELAM_CAFE"
    )
    .then(() => console.log("DB Connected"));
};
