import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import dotenv from "dotenv";

import mongoose from "mongoose";
import { connectToSocket } from  "./controller/socketManager.js"
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
dotenv.config({});
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    try {
        const connectionDb = await mongoose.connect("mongodb+srv://parthparmar2711:Parth%231109@cluster0.8btdr.mongodb.net/meet");
        console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);
        server.listen(app.get("port"), () => {
            console.log("LISTENING ON PORT 8000");
        });
    } catch (error) {
        console.error("MongoDB connection error:", error); // Log the connection error
    }
}

start();