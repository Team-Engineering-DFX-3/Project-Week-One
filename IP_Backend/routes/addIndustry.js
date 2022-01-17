import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: './public/data/uploads/' });
import IndustryProfile from '../models/industryProfileSchema.js';

router.route(`/`).post(upload.single('image'), async function (req, res) {
    const { name, description, location } = JSON.parse(req.body.industry);
    const image = req.file.path;
    const imagePath = image.substring(7);
    const newIndustry = { name: name, description: description, location: location, image: imagePath };

    IndustryProfile.findOne({ name: name }, (err, industryprofiles) => {
        if (industryprofiles) {
            res.send({ message: `Company already exists`, industryprofile: industryprofiles });
        }
        else {
            const industryprofile = new IndustryProfile(newIndustry);
            industryprofile.save((err, industryprofiles) => {
                if (err) {
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send({ message: `Company Registered successfully`, industryprofile: industryprofiles });
                }
            });
        }
    });
});

export { router as addIndustry };