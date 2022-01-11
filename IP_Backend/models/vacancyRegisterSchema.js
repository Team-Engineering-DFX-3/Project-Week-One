import mongoose from 'mongoose';

const vacancyRegisterSchema = new mongoose.Schema({

    name: String,
    discipline: String,
    title: String,
    description: String,
    location: String

});

const VacancyRegisterData = new mongoose.model("Vacancies", vacancyRegisterSchema);

export default VacancyRegisterData;