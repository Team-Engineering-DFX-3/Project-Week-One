import express from 'express';
const router = express.Router();
import Degree from '../models/degreeSchema.js';

router.route('/').post((req, res) => {
   // const {} = req.body;
    console.log(req.body);
    const degree = new Degree(req.body);
    degree.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Updating degree profile`, degree: req.body });
        }
    });
});

router.route('/').get((req, res) => {
    Degree.find({}, (err, degrees) => {
        if (err) {
            res.send(err);
            next();
        }
        res.send({ degrees });
    })
})

export { router as editDegree };
