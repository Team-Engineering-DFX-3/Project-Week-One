import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: './public/data/uploads/' })
import IndustryProfile from '../models/industryProfileSchema.js';

router.route('/:id').put(upload.single('image'), async function (req, res) {
    var imagePath, updatedData;
    const id = req.params.id;
    const { name, description, location } = JSON.parse(req.body.industry);
    const image = req?.file?.path;
    if (image !== undefined) {
        // const image = req.file.path;
        imagePath = image.substring(7);
        updatedData = { name: name, description: description, location: location, image: imagePath };
    }
    else {
        updatedData = { name: name, description: description, location: location };
    }

    // const { name, description, location } = JSON.parse(req.body.industry);
    let updatedIndustry = await IndustryProfile.findOneAndUpdate(
        { _id: id }, updatedData,
        // { name: name, description: description, location: location, image: imagePath },
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

export { router as editIndustry };







// import express from 'express';
// const router = express.Router();
// import multer from 'multer';
// const upload = multer({ dest: './public/data/uploads/' })
// import IndustryProfile from '../models/industryProfileSchema.js';

// router.route('/:id').put(upload.single('image'), async function (req, res) {
//     const id = req.params.id;
//     var updatedData;
//     var imageData;
//     if (req.file.path !== '' || req.file.path !== undefined) {
//         const { name, description, location } = JSON.parse(req.body.industry);
//         const { image } = req.file.path;
//         imageData = image.substring(7);
//         console.log(imageData);
//         updatedData = { name: name, description: description, location: location, image: imageData }
//     }
//     else {
//         const { name, description, location } = JSON.parse(req.body.industry);
//         updatedData = { name: name, description: description, location: location }
//     }

//     IndustryProfile.findOneAndUpdate({ _id: id }, updatedData, { new: true }).exec((error, industryprofiles) => {
//         error ? res.status(400) : res.status(200).send(industryprofiles);
//     });

// });

// router.route(`/:id`).get((req, res) => {
//     const id = req.params.id;
//     IndustryProfile.findOne({ _id: id }).exec((error, industryprofiles) => {
//         error ? res.status(400) : res.status(200).send(industryprofiles);
//     });
// });

// export { router as editIndustry };


