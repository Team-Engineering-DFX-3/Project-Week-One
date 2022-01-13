import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { login } from '../routes/login.js';
import { register } from '../routes/register.js';
//import { filterDiscipline } from '../routes/filterDiscipline.js';

import { addIndustry } from '../routes/addIndustry.js';
import { editIndustry } from '../routes/editIndustry.js';
import { registerVacancy } from '../routes/registerVacancy.js';
import { addVacancy } from '../routes/addVacancy.js';
import { editVacancy } from '../routes/editVacancy.js';
import { industries } from '../routes/industries.js';
import { editDegree } from '../routes/editDegree.js';
import { editSchool } from '../routes/editSchool.js';
import { editWork } from '../routes/editWork.js';
import { editPortfolio } from '../routes/editPortfolio.js';
import { editAward } from '../routes/editAward.js';
import { editUser } from '../routes/editUser.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const uri = process.env.DB_URI;

app.use(bodyParser.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(`/login`, login);
app.use(`/register`, register);
app.use(`/addIndustry`, addIndustry);
app.use(`/industry`, editIndustry);
app.use(`/industries`, industries);
app.use(`/editIndustry`, editIndustry);
app.use(`/registerVacancy`, registerVacancy);
app.use(`/editVacancy`, editVacancy);
app.use(`/addVacancy`, addVacancy);
app.use(`/vacancies`, addVacancy);
app.use(`/editDegree`, editDegree);
app.use(`/editSchool`, editSchool);
app.use(`/editWork`, editWork);
app.use(`/editPortfolio`, editPortfolio);
app.use(`/editAward`, editAward);
app.use(`/editUser`, editUser);

const main = async () => {
    console.log(`Connecting to DB @ mongodb`);
    await mongoose.connect("mongodb+srv://TeamEngineering:DFATeamEngineering@cluster0.k6gvg.mongodb.net/DFXProfile?retryWrites=true&w=majority");
};

main().then(() => console.log(`Connected to DB`))
    .catch(err => console.log("failed " + err));

// app.listen(4000, () => console.log("Server started"));
const server = app.listen(port, host, () => console.log(`Server is listening on http://localhost:4000`));

export default server
