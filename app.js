const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const signupRoutes = require("./api/users/routes");
const passport = require("passport");
const { localStrategy } = require("./middleware/passport");
const beneficiaryRoutes = require("./api/beneficiary/routes");

//MIDDLEWARE
const app = express();
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(
//     `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
//   );
//   next();
// });

//Passport
app.use(passport.initialize());
passport.use(localStrategy);

//Routes
app.use("/", signupRoutes);
app.use("/beneficiaries", beneficiaryRoutes);

connectDB();
app.listen(8000);
