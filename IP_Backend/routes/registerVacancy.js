import express from 'express';
const router = express.Router();
import Vacancy from '../models/vacancySchema.js';

router.route('/').post((req, res) => {
    const { name,discipline,title, description, location} = req.body;
    // IndustryProfile.findOne({ name }, (err, industryprofile) => {
    //     if (industryprofile) {
    //         res.send({ message: `Company exists` });
    //     }
    //     else {
    const vacancy = new Vacancy(req.body);
    vacancy.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Registering Job Vacancy`, registration: req.body });
        }
    });
});

export { router as registerVacancy};

