import express from 'express';
const router = express.Router();
import VacancyRegisterData from '../models/vacancyRegisterSchema.js';

router.route('/').post((req, res) => {
<<<<<<< HEAD
    var registerData = {};
    const { applicant_name, apply_discipline, company_name, designation, applicant_experience, applicant_location } = req.body;
    registerData = { applicant_name: applicant_name, apply_discipline: apply_discipline, company_name: company_name, designation: designation, applicant_experience: applicant_experience, applicant_location: applicant_location };
    const vacancyRegister = new VacancyRegisterData(registerData);
    vacancyRegister.save(err => {
=======

    const { name,discipline,title, description, location} = req.body;

    const vacancy = new VacancyRegisterData(req.body);
	
    vacancy.save(err => {
>>>>>>> main
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Registered Successfully for Vacancy.`, registration: registerData });
        }
    });
	
});

<<<<<<< HEAD
router.route(`/:discipline`).get((req, res) => {
    const discipline = req.params.apply_discipline;

    console.log(discipline);
    VacancyRegisterData.find({ apply_discipline: discipline }).exec((error, registeredusers) => {
        error ? res.status(400) : res.status(200).send(registeredusers);
    });
});

export { router as registerVacancy };
=======
	
export { router as registerVacancy};
>>>>>>> main

