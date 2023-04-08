const mongoose = require('mongoose');
const interviewSchema = new mongoose.Schema(
    {
      idUser: {
        type: String,
        trim: true,
      },
      reviews: [
        {
          question: {
            type: String,
            trim: true,
          },
          answer: {
            type: String,
            trim: true,
          },
          feedback: {
            type: String,
            trim: true,
          },
          url: {
            type: String,
            trim: true,
          }
        }
      ],
      score: {
        type: String,
        trim: true,
      }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);


const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;