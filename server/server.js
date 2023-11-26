require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("../server/config/database");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))