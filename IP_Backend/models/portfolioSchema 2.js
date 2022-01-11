import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
    title: String,
    url: String,
    description: String,
});

const Portfolio = new mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;