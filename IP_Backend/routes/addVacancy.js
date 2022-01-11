import express from 'express';
const router = express.Router();
import VacancyData from '../models/vacancySchema.js'

router.route(`/`).post(async function (req, res) {
    const vacancydata = new VacancyData(req.body);
    vacancydata.save((err, vacancydetails) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send({ message: `Vacancy Added Successfully`, vacancydata: vacancydetails });
        }
    });
});


router.route(`/:name`).get((req, res) => {
    const name = req.params.name;
    VacancyData.find({ company_name: name }).exec((error, vacancydetails) => {
        error ? res.status(400) : res.status(200).send(vacancydetails);
    });
});

export { router as addVacancy };
