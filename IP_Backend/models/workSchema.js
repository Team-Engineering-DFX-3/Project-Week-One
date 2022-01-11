import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
    experience: String,
    institution: String,
    position: String,
    dateFrom: String,
    dateTo: String,
    description: String
});

const Work = new mongoose.model("Work", workSchema);

export default Work;