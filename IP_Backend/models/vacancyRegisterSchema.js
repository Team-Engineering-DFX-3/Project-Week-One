import mongoose from 'mongoose';

const vacancyRegisterSchema = new mongoose.Schema({

    applicant_name: String,
    apply_discipline: String,
    company_name: String,
    designation: String,
    applicant_experience: Number,
    applicant_location: String

});

const VacancyRegisterData = new mongoose.model("VacancyRegisterData", vacancyRegisterSchema);

export default VacancyRegisterData;