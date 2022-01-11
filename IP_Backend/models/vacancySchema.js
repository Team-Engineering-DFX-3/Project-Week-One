import mongoose from 'mongoose';

const vacancySchema = new mongoose.Schema({
<<<<<<< HEAD
    name:String,
	discipline:String,
	title: String,
    description: String,
    location: String
=======
    designation: String,
    company_name: String,
    job_location: String,
    mode: String,
    qualification: String
>>>>>>> 0ef988dc2222971907a1536b11f59204739a99d1
});

const VacancyData = new mongoose.model("VacancyDetails", vacancySchema);

<<<<<<< HEAD
export default Vacancy;

=======
export default VacancyData;
>>>>>>> 0ef988dc2222971907a1536b11f59204739a99d1
