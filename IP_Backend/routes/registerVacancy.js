import express from 'express';
const router = express.Router();
import VacancyRegisterData from '../models/vacancyRegisterSchema.js';

router.route('/').post((req, res) => {
    const vacancy = new VacancyRegisterData(req.body);
    vacancy.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Registering Job Vacancy`, registration: req.body });
        }
    });
});

export { router as registerVacancy };

