import express from 'express';
const router = express.Router();
//import IndustryProfile from '../models/industryProfileSchema.js'; 

router.post("/", (req, res) => {
    res.send({ message: `Updating industry profile`, profile: req.body });
});

export { router as editIndustry };
