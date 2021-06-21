const express = require("express");
const client = require("../database");

const router = express.Router();
//router.use(express.json());

router.post("/register", (req,res)=>{

    const {email,password,name,surname} = req.body;

    const query = `
    INSERT INTO users (email, password, name, surname)
    VALUES ('${email}', '${password}', '${name}','${surname}')
    `;
    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data insert successful');
    });

    res.send("sent to database");

});



module.exports=router;