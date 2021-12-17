import mongoose from 'mongoose';

const industryProfileSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    image: String
});

const IndustryProfile = new mongoose.model("IndustryProfile", industryProfileSchema);

export default IndustryProfile;