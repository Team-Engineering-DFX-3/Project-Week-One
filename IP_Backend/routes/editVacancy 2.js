import express from 'express';
const router = express.Router();
//import Vacancy from '../models/vacancySchema.js';

router.post("/", (req, res) => {
    res.send({ message: `Updating Vacancy`, vacancy: req.body });
});

export { router as editVacancy };
