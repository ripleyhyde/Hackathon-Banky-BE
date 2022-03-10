const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const signupRoutes = require("./api/users/routes");
const beneficiaryRoutes = require("./api/beneficiary/routes");
const accountRoutes = require("./api/accounts/routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
});

//PASSPORT
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

//ROUTES
app.use("/", signupRoutes);
app.use("/beneficiaries", beneficiaryRoutes);
app.use("/accounts", accountRoutes); //Routes
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

connectDB();
app.listen(3001);
