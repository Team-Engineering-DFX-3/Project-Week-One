import express from 'express';
const router = express.Router();
import CreateUser from '../models/createuserSchema.js';

router.route(`/`)
    .post((req, res) => {
        const { email, password } = req.body;

        CreateUser.findOne({ email }, (err, user) => {
            if (user && password === user.password) {
                res.send({ message: `Login Success`, user });
            }
            else {
                res.send({ message: `Incorrect Login Details` });
            }
        });
    });

export { router as login };

