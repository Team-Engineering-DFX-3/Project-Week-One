import express from 'express';
const router = express.Router();
import Award from '../models/awardSchema.js';


router.route('/').post((req, res) => {
    // const {} = req.body;
    console.log(req.body);
    const award = new Award(req.body);
    award.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Updating award profile`, award: req.body });
        }
    });
});

router.route('/').get((req, res) => {
    Award.find({}, (err, awards) => {
        if (err) {
            res.send(err);
            next();
        }
        res.send({ awards });
    })
})

export { router as editAward };