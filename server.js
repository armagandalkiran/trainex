const express = require("express");
const register = require("./routes/register.js");

const app = express();
app.use(express.json());

const PORT = 5000;
app.use("/",register);

app.listen(PORT,()=>{
    console.log(`Backend server is running on port ${PORT}`);
});












