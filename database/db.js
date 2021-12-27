import mongoose from "mongoose";
const Connection = (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@flipkartweb.un5gs.mongodb.net/flipkartClonedb?retryWrites=true&w=majority`;
  mongoose
    .connect(URL, {})
    .then(console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.log("Error: ", error.message));
};

export default Connection;
