const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema(
    {
      question: {
        type: String,
        trim: true,
      },
      urlVideo: {
        type: String,
        trim: true,
      }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);


const Data = mongoose.model('Data', dataSchema);

module.exports = Data;