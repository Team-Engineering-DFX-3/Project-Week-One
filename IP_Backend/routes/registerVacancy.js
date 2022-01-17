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

router.route(`/:apply_discipline`).get((req, res) => {
    const apply_discipline = req.params.apply_discipline;
    const position = apply_discipline.indexOf('&');
    const company_name = apply_discipline.substring(position + 1);
    const discipline = apply_discipline.substring(0, position);
    VacancyRegisterData.find({ apply_discipline: discipline, company_name: company_name }).exec((error, registeredusers) => {
        // if (error) {
        //     res.status(400)
        // }
        // else {
        //     if (registeredusers === []) {
        //         res.send({ message: `Sorry!! No Registered Users.` });
        //     }
        //     else {
        //         res.status(200).send(registeredusers);
        //     }
        // }

        error ? res.status(400) : res.status(200).send(registeredusers);
    });
});

export { router as registerVacancy };

