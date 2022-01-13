import express from 'express';
const router = express.Router();
import CreateUser from '../models/createuserSchema.js';

router.route(`/`)
    .post((req, res) => {
        const { email } = req.body;

        CreateUser.findOne({ email }, (err, user) => {
            if (user) {
                res.send({ message: `User Already Exists` });
            }
            else {
                const user = new CreateUser(req.body);
                user.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: `Registration Successful` });
                    }
                });
            }
        });
    });

export { router as register };

