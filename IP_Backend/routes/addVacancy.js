import express from 'express';
const router = express.Router();
import VacancyData from '../models/vacancySchema.js';
import IndustryProfile from '../models/industryProfileSchema.js';

router.route(`/`).post(async function (req, res) {
    const { designation, company_name, job_location, mode, qualification } = req.body;

    VacancyData.findOne({ designation: designation, company_name: company_name, job_location: job_location, mode: mode, qualification: qualification }).exec((err, vacancydetails) => {
        if (vacancydetails) {
            res.send({ message: `Vacancy already exists`, vacancydetails: vacancydetails });
        }

        else {
            if (err) {
                res.status(400);
            }
            else {
                IndustryProfile.findOne({ name: company_name }).exec((err, companyname) => {
                    if (companyname) {
                        const vacancydata = new VacancyData(req.body);
                        vacancydata.save((err, vacancydetails) => {
                            if (err) {
                                res.status(400).send(err);
                            }
                            else {
                                res.status(200).send({ message: `Vacancy added successfully`, vacancydata: vacancydetails });
                            }
                        });
                    }
                    else {
                        res.send({ message: `Company does not exist` });
                    }
                });
            }
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
