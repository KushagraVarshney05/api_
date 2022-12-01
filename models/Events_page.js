const mongoose = require("mongoose");

const event = new mongoose.Schema({
  event_name: {
    type: String,
    required: [true, "event_name must be provide"],
  },
  venue: {
    type: String,
    required: [true, "venue should not be empty"],
  },
  timings:{
    type:String,
    required:[true,"timing should not be empty"]
  },
  start_date:{
    type: Date,
    required:[true,"startDate should not be empty"]
  },
  end_date:{
    type: Date,
    required:[true,"endDate should not be empty"]
  }
});

module.exports = mongoose.model("event", event);