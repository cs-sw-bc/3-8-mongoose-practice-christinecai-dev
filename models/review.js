import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
  reviewerName: { type: String, required: true, trim: true },
  comment: { type: String, required: true, trim: true },
  stars: { type: Number, required: true, min: 1, max: 5 }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;
