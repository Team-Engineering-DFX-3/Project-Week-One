import express from 'express';
const router = express.Router();
import User from '../models/userSchema.js';


router.route('/').post((req, res) => {
    // const {} = req.body;
    console.log(req.body);
    const user = new User(req.body);
    user.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Updating User profile`, user: req.body });
        }
    });
});

router.route('/').get((req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
            next();
        }
        res.send({ users });
    })
})

// router.route('/:name').get((req, res) => {
//     const user_name = req.params.name;
//     User.find({ name: user_name }).exec((error, users) => {
//         error ? res.status(400) : res.status(200).send(users);
//     });
// });

export { router as editUser };