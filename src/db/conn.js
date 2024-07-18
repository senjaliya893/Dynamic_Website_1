const mongoose = require("mongoose");

// CREATING A DATABASE
mongoose.connect("mongodb://localhost:27017/dynamic-Web", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection Successfully");
}).catch((e) => {
    console.log("No Connection",e);
})