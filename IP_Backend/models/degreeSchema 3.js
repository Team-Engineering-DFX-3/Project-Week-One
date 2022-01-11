import mongoose from 'mongoose';

const degreeSchema = new mongoose.Schema({
    institution: String,
    subject: String,
    level: String,
    grade: String,
    dateFrom: String,
    dateTo: String,
    description: String
});

const Degree = new mongoose.model("Degree", degreeSchema);

export default Degree;