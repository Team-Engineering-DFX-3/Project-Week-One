import express from 'express';
const router = express.Router();
import VacancyRegisterData from '../models/vacancyRegisterSchema.js';

router.route('/').post((req, res) => {
    var registerData = {};
    const { applicant_name, apply_discipline, company_name, designation, applicant_experience, applicant_location } = req.body;
    registerData = { applicant_name: applicant_name, apply_discipline: apply_discipline, company_name: company_name, designation: designation, applicant_experience: applicant_experience, applicant_location: applicant_location };
    const vacancyRegister = new VacancyRegisterData(registerData);
    vacancyRegister.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Registered Successfully for Vacancy.`, registration: registerData });
        }
    });
});

export { router as registerVacancy };

