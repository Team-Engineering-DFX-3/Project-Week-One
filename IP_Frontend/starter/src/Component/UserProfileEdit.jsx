import React from 'react'
import { useState, useEffect } from 'react';
import '../Component/css/App.css';
import axios from 'axios';
import DegreeModal from './Modal/DegreeModal';
import SchoolModal from './Modal/SchoolModal';
import WorkModal from './Modal/WorkModal'
import AwardModal from './Modal/AwardModal';
import PortfolioModal from './Modal/PortfolioModal';
import { Link, useLocation } from 'react-router-dom';
import FormOne from './Forms/FormOne'
import ContainerHeader from './Header/ContainerHeader'


export default function UserProfileEdit() {

    const [allDegreeData, setAllDegreeData] = useState([]);
    const [allWorkData, setAllWorkData] = useState([]);
    const [allSchoolData, setAllSchoolData] = useState([]);




    useEffect(() => {
        async function getDegrees() {
            let response = await axios.get('http://127.0.0.1:4000/editDegree');
            setAllDegreeData(response.data.degrees)
            console.log(response.data.degrees);
        }

        getDegrees()
    }, [])
    useEffect(() => {
        async function getWork() {
            let response = await axios.get('http://127.0.0.1:4000/editWork');
            setAllWorkData(response.data.work)
            console.log(response.data.work);
        }

        getWork()
    }, [])

    useEffect(() => {
        async function getSchool() {
            let response = await axios.get('http://127.0.0.1:4000/editSchool');
            setAllSchoolData(response.data.schools)
            console.log(response.data.schools);
        }

        getSchool()
    }, [])



    return (
        <>
            <body className='body'>
                <div className='container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Editing Profile"} />
                    </div>
                    <div className='row'>
                        <Link to="/user">
                            <button id="editButton" type="button" className="btn btn-primary">
                                Home
                            </button>
                        </Link>
                        <FormOne />
                    </div>
                </div>

                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Degree"} />
                    </div>
                    <DegreeModal />
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Institution</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Level</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Starting Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                {allDegreeData[0] ? allDegreeData.map(degree =>
                                    <><td>{degree.institution}</td><td>{degree.subject}</td> <td>{degree.level}</td> <td>{degree.grade}</td><td>{degree.dateFrom}</td><td>{degree.dateT}</td> <td>{degree.description}</td></>) : <td> No Degree Found </td>}

                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"School Qualifications"} />
                    </div>
                    <SchoolModal />
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">School</th>
                                <th scope="col">Exam Type </th>
                                <th scope="col">Subject</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Year</th>
                                <th scope="col">Description </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                {allSchoolData[0] ? allSchoolData.map(school =>
                                    <><td>{school.school}</td><td>{school.examType}</td> <td>{school.subject}</td> <td>{school.grade}</td><td>{school.year}</td> <td>{school.description}</td></>) : <td> No School Found </td>}

                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Work Experience"} />
                    </div>
                    <WorkModal />
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Experience</th>
                                <th scope="col">Institution</th>
                                <th scope="col">Position</th>
                                <th scope="col">Starting date</th>
                                <th scope="col">End date</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th scope="row">1</th>
                                {allWorkData[0] ? allWorkData.map(work =>
                                    <><td>{work.experience}</td><td>{work.institution}</td> <td>{work.position}</td> <td>{work.dateFrom}</td><td>{work.dateTo}</td> <td>{work.description}</td></>) : <td> No Work Found </td>}

                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Certificates and Awards"} />
                    </div>
                    <AwardModal />
                </div>
                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Portfolio"} />
                    </div>
                    <PortfolioModal />
                </div>

                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Your Training"} />
                    </div>
                    <div className='row'>
                        <form action="/" id="2">
                            <div className='sub-entry'>
                                <ul className='list' id='left'>
                                    <li><label for="cohort">Cohort:</label><br></br></li>
                                    <li><input className='input' type="text" id="name" name="name" placeholder="John Doe" /><br></br></li>
                                    <li><label for="learning">Learning:</label><br></br></li>
                                    <li><input className='input' type="text" id="learning" name="learning" placeholder="Learning path" /><br></br></li>
                                    <li><label for="trainer">Trainer:</label><br></br></li>
                                    <li><input className='input' type="text" id="trainer" name="trainer" placeholder="John Doe" /><br></br></li>
                                    <li><label for="trainer">Trainee finishing date:</label><br></br></li>
                                    <li><input className='input' type="date" id="trainee" name="trainee" /><br></br></li>
                                </ul>
                            </div>
                            <div className='sub-entry'>
                                <ul className='list' id='right'>
                                    <li><label for="github">Challenges:</label><br></br></li>
                                    <li><input className='input' type="text" id="challenge-a" name="challenge-a" placeholder="Challenge A" /><br></br></li>
                                    <li><input className='input' type="text" id="challenge-b" name="challenge-b" placeholder="Challenge B" /><br></br></li>
                                    <li><input className='input' type="text" id="challenge-c" name="challenge-c" placeholder="Challenge C" /><br></br></li>
                                    <li><input className='input' type="text" id="challenge-d" name="challenge-d" placeholder="Challenge D" /><br></br></li>
                                    <li><input className='input' type="text" id="challenge-e" name="challenge-e" placeholder="Challenge E" /><br></br></li>
                                    <li><input className='input' type="text" id="challenge-f" name="challenge-f" placeholder="Challenge F" /><br></br></li>
                                    <br></br>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>

                <div className=' container shadow p-3 mb-5 bg-body rounded'>
                    <div className="row">
                        <div className="col-sm-5">
                            <button type="submit" className="btn btn-primary btn-custom" >Submit Profile Changes</button>
                        </div>
                        <div className="col-sm-5">
                            <button type="button" className="btn btn-info btn-custom">Cancel Changes </button>
                        </div>
                        <div className="col-sm-2">
                            <button type="reset" className="btn btn-danger btn-custom">Reset</button>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}