const express = require("express");
const app = express();
app.use(express.static("./public"))
app.set("view engine", "html");

app.get("/", (req, res)=>{
    res.render("./index")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Listening on 3000")
})