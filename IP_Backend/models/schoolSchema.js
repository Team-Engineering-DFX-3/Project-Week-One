import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
    school: String,
    examType: String,
    subject: String,
    grade: String,
    year: String,
    description: String
});

const School = new mongoose.model("School", schoolSchema);

export default School;