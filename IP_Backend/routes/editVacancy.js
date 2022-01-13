import express from 'express';
const router = express.Router();
import VacancyData from '../models/vacancySchema.js';

router.route('/:id').put(async function (req, res) {
    const id = req.params.id;
    var updatedData = {};
    const { designation, company_name, job_location, mode, qualification } = req.body;
    var keys = Object.keys(req.body);
    for (var i = 0, length = keys.length; i < length; i++) {
        if (req.body[keys[i]] !== undefined) {
            updatedData[keys[i]] = req.body[keys[i]];
        }
    }
    let updatedVacancy = await VacancyData.findOneAndUpdate(
        { _id: id }, updatedData, { new: true });
    res.status(200).send(updatedVacancy);
});

router.route(`/:id`).get((req, res) => {
    const id = req.params.id;
    VacancyData.findOne({ _id: id }).exec((error, vacancydetails) => {
        error ? res.status(400) : res.status(200).send(vacancydetails);
    });
});

router.route(`/:id`).delete((req, res) => {
    const id = req.params.id;
    VacancyData.findByIdAndDelete({ _id: id }).exec((error, vacancydetails) => {
        if (error) {
            res.status(400).send({ message: error });
        }
        else {
            res.status(200).send({ message: `Vacancy deleted successfully`, vacancy: vacancydetails });
        }
    });
});

export { router as editVacancy };