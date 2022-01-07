import express from 'express';
const router = express.Router();
import School from '../models/schoolSchema.js';

router.route('/').post((req, res) => {
    // const {} = req.body;
    console.log(req.body);
    const school = new School(req.body);
    school.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Updating school profile`, school: req.body });
        }
    });
});

router.route('/').get((req, res) => {
    School.find({}, (err, schools) => {
        if (err) {
            res.send(err);
            next();
        }
        res.send({ schools });
    })
})

export { router as editSchool };
