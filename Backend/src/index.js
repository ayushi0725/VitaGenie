import app from "./app.js";
import { connectDB } from "./db/index.js";
import { config } from "dotenv";
config();

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:" + process.env.PORT);
  });
});
console.log("MONGO:", process.env.MONGODB_URI);
console.log("JWT:", process.env.JWT_SECRET_KEY);
