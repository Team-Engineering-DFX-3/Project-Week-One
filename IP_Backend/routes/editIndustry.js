import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: './public/data/uploads/' })
import IndustryProfile from '../models/industryProfileSchema.js';

router.route('/:id').put(upload.single('image'), async function (req, res) {
    const id = req.params.id;
    const imagePath = req.file.path;
    const image = imagePath.substring(7);

    const { name, description, location } = JSON.parse(req.body.industry);
    let updatedIndustry = await IndustryProfile.findOneAndUpdate(
        { _id: id },
        { name: name, description: description, location: location, image: image }
    );
    res.status(200).send(updatedIndustry);
});

router.route(`/:id`).get((req, res) => {
    const id = req.params.id;
    IndustryProfile.findOne({ _id: id }).exec((error, industryprofiles) => {
        error ? res.status(400) : res.status(200).send(industryprofiles);
    });
});

export { router as editIndustry };


