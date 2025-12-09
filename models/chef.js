import mongoose from 'mongoose';

const chefSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    specialtyCuisine: {type: String, trim: true},
    yearsOfExperience: {type: Number, min:0}
},{timestamps: true});

const Chef = mongoose.model('Chef', chefSchema);
export default Chef;