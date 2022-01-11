import mongoose from 'mongoose';

const awardSchema = new mongoose.Schema({
    type: String,
    issuer: String,
    award: String,
    grade: String,
    dateAwarded: String,
    description: String
});

const Award = new mongoose.model("Award", awardSchema);

export default Award;