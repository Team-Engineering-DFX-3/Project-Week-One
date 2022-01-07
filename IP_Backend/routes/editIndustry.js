import express from 'express';
const router = express.Router();
import IndustryProfile from '../models/industryProfileSchema.js';
// import mongo from 'mongodb';

router.route('/:id').put(async function (req, res) {
    // const id = mongo.ObjectId(req.params.id);
    const id = req.params.id;
    const { name, description, location, image } = req.body;
    let updatedIndustry = await IndustryProfile.findOneAndUpdate(
        { _id: id },
        { name: name, description: description, location: location, image: image }
    );
    res.status(200).send(updatedIndustry);
});




//     query: { _id: id },
//     update: { name: name, description: description, location: location, image: image },
//     new: true,
//     fields: industryprofiles,
//     upsert: true
// }).exec((error, fields) => {
//     error ? res.status(400) : res.status(200).send(fields);
// });

// IndustryProfile.findOne({ _id: id }).exec((error, industryprofiles) => {
//     if (industryprofiles) {
//         industryprofiles.save().then(response => {
//             res.status(200).send(industryprofiles);
//         });
//     }
//         else {
//         const industryprofile = new IndustryProfile(req.body);
//         industryprofile.save(err => {
//             if (err) {
//                 res.send(err);
//             }
//             else {
//                 // res.send({ message: `Updating industry profile`, industryprofile });
//                 res.status(200).send(industryprofiles);
//             }
//         });

//     }
// });
// });

router.route(`/:id`).get((req, res) => {
    // const id = mongo.ObjectId(req.params.id);
    const id = req.params.id;
    IndustryProfile.findOne({ _id: id }).exec((error, industryprofiles) => {
        error ? res.status(400) : res.status(200).send(industryprofiles);
    });
});


export { router as editIndustry };


