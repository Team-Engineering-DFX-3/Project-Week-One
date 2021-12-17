import express from 'express';
const router = express.Router();

router.post("/", (req, res) => {
    res.send({ message: `Updating industry profile`, profile: req.body });
});

export { router as editIndustry };
