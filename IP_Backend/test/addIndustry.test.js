import { addIndustry } from '../routes/addIndustry.js';
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http'
import server from '../src/index.js'
import industryData from './testData/industry.js'
import industryProfileModel from '../models/industryProfileSchema.js'

describe("addIndustry", () => {
    beforeEach(
        async () => {
            await industryProfileModel.deleteMany()
                .then(() => console.log('Emptied Industry Profile'))
                .catch(err => {
                    console.log(err);
                    throw new Error();
                })
            await industryProfileModel.insertMany(industryData)
                .then(() => console.log('Populated collection'))
                .catch(err => {
                    console.log(err);
                    throw new Error();
                })
        }
    )

    it("Testing for database with same name, if so returns key with message", async () => {
        const response = await chai.request(server)
            .post(`/addIndustry`)
            .send(industryData)

        expect(response.body).to.be.an("object");
        expect(response.body).to.have.property('message', 'Company already exists')
        expect(response.body).to.have.property('industryprofile');

    }
    )

})