import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  ingredientName: { type: String, required: true, trim: true },
  quantity: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true }
}, { _id: true });

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  cuisine: { type: String, required: true, trim: true },
  cookingTime: { type: Number, required: true, min: 0 },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  rating: { type: Number, min: 1, max: 5, default: 3 },
  isVegetarian: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  ingredients: {
    type: [ingredientSchema],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  instructions: {
    type: [String],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef', required: true }
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
