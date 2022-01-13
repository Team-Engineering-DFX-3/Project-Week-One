import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: './public/data/uploads/' });
import IndustryProfile from '../models/industryProfileSchema.js';

router.route('/:id').put(upload.single('image'), async function (req, res) {
    var imagePath, updatedData;
    const id = req.params.id;
    const { name, description, location } = JSON.parse(req.body.industry);
    const image = req?.file?.path;
    if (image !== undefined) {
        imagePath = image.substring(7);
        updatedData = { name: name, description: description, location: location, image: imagePath };
    }
    else {
        updatedData = { name: name, description: description, location: location };
    }
    let updatedIndustry = await IndustryProfile.findOneAndUpdate(
        { _id: id }, updatedData,
        { new: true }
    );
    res.status(200).send(updatedIndustry);
});

router.route(`/:id`).get((req, res) => {
    const id = req.params.id;
    IndustryProfile.findOne({ _id: id }).exec((error, industryprofiles) => {
        error ? res.status(400) : res.status(200).send(industryprofiles);
    });
});

router.route(`/:id`).delete((req, res) => {
    const id = req.params.id;
    IndustryProfile.findByIdAndDelete({ _id: id }).exec((error, industryprofiles) => {
        if (error) {
            res.status(400).send({ message: error });
        }
        else {
            res.status(200).send({ message: `Company deleted successfully`, company: industryprofiles });
        }
    });
});

export { router as editIndustry };







