import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        });

        app.listen(PORT || 8000, () => {
            console.log(`Server is running on: ${PORT}`);
        });
    } catch (error) {
        console.log("MongoDB connection failed: ", error);
    }
}

startServer();