const express = require("express");
const app = express();
const team = require("./models/team");
const event = require("./models/Events_Page");
// const axios = require("axios");
// const { expressjwt: expressJwt } = require("express-jwt");
// const jwks = require("jwks-rsa");
const cors = require("cors");
const connectDB = require("./db/connect");

const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.post("/api/v1/team", async (req, res) => {
    const Team = await team.create(req.body);
    res.status(201).json({ Team });
  });

  app.get("/api/v1/team",async(req,res)=>{
    try {
      const member = await team.find({});
      // console.log(member);
      res.status(200).json({ member });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  });


  app.post("/api/v1/event", async (req, res) => {
    const Event = await event.create(req.body);
    res.status(201).json({ Event });
  });


  app.get("/api/v1/event",async(req,res)=>{
    
      try {
        const member = await event.find({});
        // console.log(member);
        res.status(200).json({ member });
      } catch (error) {
        res.status(500).json({ msg: error });
      }
    
  });


  

  const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listenning on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start()