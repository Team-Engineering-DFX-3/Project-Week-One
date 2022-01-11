import express from 'express';
const router = express.Router();
import IndustryProfile from '../models/industryProfileSchema.js';

router.route(`/`).get((req, res) => {
    IndustryProfile.find().exec((error, industryprofiles) => {
        error ? res.status(400) : res.status(200).send(industryprofiles);
    });
});

export { router as industries };


