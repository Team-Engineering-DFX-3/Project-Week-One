import express from 'express';
const router = express.Router();
import mongo from 'mongodb';

import IndustryProfile from '../models/industryProfileSchema.js';

router.route(`/:id`).get((req, res) => {
    const id = new mongo.ObjectId(req.params.id);
    IndustryProfile.findOne({ _id: id }).exec((error, industryprofiles) => {
        error ? res.status(400) : res.status(200).send(industryprofiles);
    });
});

export { router as industry };