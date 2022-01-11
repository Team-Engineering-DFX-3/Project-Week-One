import mongoose from 'mongoose';

const vacancySchema = new mongoose.Schema({
    designation: String,
    company_name: String,
    job_location: String,
    mode: String,
    qualification: String
});

const VacancyData = new mongoose.model("VacancyDetails", vacancySchema);

export default VacancyData;
