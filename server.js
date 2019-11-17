const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require('./server/routes/UsersApi')
const transactions = require('./server/routes/TransactionsApi')

const db = require("./config/keys").mongoURI;
mongoose.connect(db,{ useNewUrlParser: true ,  useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/users", users);
app.use('/transactions', transactions)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


