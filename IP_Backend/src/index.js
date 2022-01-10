import express from 'express';
import mongoose from 'mongoose';
// import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { editIndustry } from '../routes/editIndustry.js';
import { editVacancy } from '../routes/editVacancy.js';
import { industries } from '../routes/industries.js';
import { industry } from '../routes/industry.js';
import { editDegree } from '../routes/editDegree.js';
import { editSchool } from '../routes/editSchool.js';
import { editWork } from '../routes/editWork.js';

dotenv.config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(`/industry`, editIndustry);
app.use(`/industries`, industries);
app.use(`/editIndustry`, editIndustry);
app.use(`/editVacancy`, editVacancy);
app.use(`/editDegree`, editDegree);
app.use(`/editSchool`, editSchool);
app.use(`/editWork`, editWork);

app.listen(port, host, () => console.log(`Server is listening on http://${host}:${port}`));

const main = async () => {
    console.log(`Connecting to DB @ mongodb`);
    await mongoose.connect("mongodb+srv://TeamEngineering:DFATeamEngineering@cluster0.k6gvg.mongodb.net/DFXProfile?retryWrites=true&w=majority");
};

main().then(() => console.log(`Connected to DB`))
    .catch(err => console.log("failed " + err));

app.listen(4000, () => console.log("Server started"));