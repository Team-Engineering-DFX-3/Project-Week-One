import express from 'express';
// import mongoose from 'mongoose';
// import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { editIndustry } from '../routes/editIndustry.js';

dotenv.config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(`/edit`, editIndustry);

app.listen(port, host, () => console.log(`Server is listening on http://${host}:${port}`));

