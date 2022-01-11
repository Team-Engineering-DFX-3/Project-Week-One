import express from 'express';
const router = express.Router();
import Portfolio from '../models/portfolioSchema.js';

router.route('/').post((req, res) => {
    // const {} = req.body;
    console.log(req.body);
    const portfolio = new Portfolio(req.body);
    portfolio.save(err => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ message: `Updating portfolio profile`, portfolio: req.body });
        }
    });
});

router.route('/').get((req, res) => {
    Portfolio.find({}, (err, portfolio) => {
        if (err) {
            res.send(err);
            next();
        }
        res.send({ portfolio });
    })
})

export { router as editPortfolio };