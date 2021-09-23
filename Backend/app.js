require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");
// const { filenameNotString } = require("formidable/formidableerror");

// ============================= DATABASE CONNECTIVITY =============================

/* DATABASE CONNECTIVITY THROUGH MONGO APPLICATION WITH MONGOOSE */
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,  // THESE 4 EXTRA FIELDS ARE TO AVOID DEPRICATION WARNINGS.
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {     // CONNECT FUNCTION RETURNS A PROMISE WHICH WILL EITHER RETURNS
    console.log("Connection Successfull!"); // A CONNECTION OR AN ERROR.
}).catch((error) => {
    console.log("Connection cannot be established!");
});

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);

//PORT
const port = process.env.PORT || 5000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});