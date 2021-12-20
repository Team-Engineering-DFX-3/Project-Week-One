import mongoose from 'mongoose';

const vacancySchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
});

const Vacancy = new mongoose.model("Vacancy", vacancySchema);

export default Vacancy;