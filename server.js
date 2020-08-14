const express = require ("express");
const port = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const mongoose = require ("mongoose");

const routes = require("./routes/apiRoutes");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookDb");

app.use(routes);

app.listen(port,function(){
    console.log("App is listening on port " + port);
});