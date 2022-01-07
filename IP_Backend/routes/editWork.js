import express from 'express';
const router = express.Router();
import Work from '../models/workSchema.js';

router.route('/').post((req, res) => {
    // const {} = req.body;
    console.log(req.body);
    const work = new Work(req.body);
    work.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Updating work experience`, work: req.body });
        }
    });
});

router.route('/').get((req, res) => {
    Work.find({}, (err, work) => {
        if (err) {
            res.send(err);
            next();
        }
        res.send({ work });
    })
})

export { router as editWork };
