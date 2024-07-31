const mongoose = require("mongoose");

// CREATING A DATABASE
mongoose.connect("mongodb+srv://viveksenjaliya1:bB0tM5sWwEBtxA2d@devlopment.4ltyimt.mongodb.net/dynamic-Web", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection Successfully");
}).catch((e) => {
    console.log("No Connection",e);
})
