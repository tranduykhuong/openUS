const mongoose = require('mongoose');
const interviewSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      },
      password: {
        type: String,
        trim: true,
      },
      majoy: {
        type: String,
        trim: true,
      },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true
    }
);


const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;