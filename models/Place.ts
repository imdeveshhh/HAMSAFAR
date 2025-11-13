// models/Place.ts
import mongoose from 'mongoose';

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  image: String,
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Avoid model overwrite error during dev hot-reload
export default mongoose.models.Place || mongoose.model('Place', PlaceSchema);
