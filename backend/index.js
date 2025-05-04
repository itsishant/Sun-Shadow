const express = require("express");
const cors = require("cors");
const {create } = require('./object');
const { user } = require('./db');
require("dotenv").config();
const PORT = process.env.PORT;
const port = 4000 || PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req,res) => {
    const createPayload = req.body;
    const paresePayload = create.safeParse(createPayload);
    if(!paresePayload.success){
        res.status(411).json({
            message: "You sent the wrong inputs"
        });
        return;
    }

    await user.create({
        username: createPayload.username,
        password: createPayload.password
    });
    res.status(200).json({
        message: "User is created"
    });

});

app.get("/getUser", async (req,res) => {
    const userDetails =  await user.find({});
    res.status(200).json({
        Users: userDetails
    });

});

app.listen(port, () => {
    console.log("Server is running at 4000 port");
});
