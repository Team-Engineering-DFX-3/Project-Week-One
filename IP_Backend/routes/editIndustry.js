import express from 'express';
const router = express.Router();
import IndustryProfile from '../models/industryProfileSchema.js';

router.route('/').post((req, res) => {
    const { name, description, location, image } = req.body;
    // IndustryProfile.findOne({ name }, (err, industryprofile) => {
    //     if (industryprofile) {
    //         res.send({ message: `Company exists` });
    //     }
    //     else {
    const industryprofile = new IndustryProfile(req.body);
    industryprofile.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            // res.send({ message: `Updating industry profile`, industryprofile });
            res.send({ message: `Updating industry profile`, profile: req.body });
        }
    });
});



export { router as editIndustry };


