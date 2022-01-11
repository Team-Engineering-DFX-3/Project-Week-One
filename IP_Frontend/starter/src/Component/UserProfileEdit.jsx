import React from 'react'
import { useState, useEffect } from 'react';
import '../Component/css/App.css';
import axios from 'axios';
import DegreeModal from './Modal/DegreeModal';
import SchoolModal from './Modal/SchoolModal';
import WorkModal from './Modal/WorkModal'
import AwardModal from './Modal/AwardModal';
import PortfolioModal from './Modal/PortfolioModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import FormOne from './Forms/FormOne'
import ContainerHeader from './Header/ContainerHeader'


export default function UserProfileEdit() {

    const [allDegreeData, setAllDegreeData] = useState([]);
    const [allWorkData, setAllWorkData] = useState([]);
    const [allSchoolData, setAllSchoolData] = useState([]);
    const [allPortfolioData, setAllPortfolioData] = useState([]);
    const [allAwardData, setAllAwardData] = useState([]);

    let degreeTableRow = 1;
    let schoolTableRow = 1;
    let workTableRow = 1;
    let portfolioTableRow = 1;
    let awardTableRow = 1;


    //const [show, setShow] = useState(false);



    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: ``,
        pemail: ``,
        dfemail: ``,
        github: ``,
        linkedin: ``,
        phone: ``,
        cohort: ``,
        learning: ``,
        trainer: ``,
        grade: ``,
        traineeFinishingDate: ``,
        challengeOne: ``,
        challengeTwo: ``,
        challengeThree: ``,
        challengeFour: ``,
        challengeFive: ``,
        challengeSix: ``,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
        console.dir("User data: " + userData);
    };



    const handleSubmit = async (e) => {
        console.log("entered handle");
        // setShow(false);
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:4000/editUser', userData);
            alert(response.data.message);
            console.log(response.data.user);
            setUserData(response.data.user);
            console.log('hi');
            navigate('/User', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };


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

    useEffect(() => {
        async function getPortfolio() {
            let response = await axios.get('http://127.0.0.1:4000/editPortfolio');
            setAllPortfolioData(response.data.portfolio)
            console.log(response.data.portfolio);
        }

        getPortfolio()
    }, [])

    useEffect(() => {
        async function getAward() {
            let response = await axios.get('http://127.0.0.1:4000/editAward');
            setAllAwardData(response.data.awards)
            console.log(response.data.awards);
        }

        getAward()
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
                        <form action="/" id="1" >
                            <div class='sub-entry'>
                                <ul class='list' id='left'>
                                    <li><label for="name">Full Name:</label><br></br></li>
                                    <li><input class='input' type="text" id="name" name="name" placeholder="John Doe" onChange={handleChange} /><br></br></li>
                                    <li><label for="pemail">Personal Email:</label><br></br></li>
                                    <li><input class='input' type="email" id="pemail" name="pemail" placeholder="JohnDoe@email.com" onChange={handleChange} /><br></br></li>
                                    <li><label for="demail">Digital Futures Email:</label><br></br></li>
                                    <li><input class='input' type="email" id="demail" name="dfemail" placeholder="JohnDoe@DFemail.com" onChange={handleChange} /><br></br></li>
                                </ul>
                            </div>
                            <div class='sub-entry'>
                                <ul class='list' id='right'>
                                    <li><label for="github">Github:</label><br></br></li>
                                    <li><input class='input' type="url" id="github" name="github" placeholder="https://github.com/JohnDoe" onChange={handleChange} /><br></br></li>
                                    <li><label for="linkedin">LinkedIn:</label><br></br></li>
                                    <li><input class='input' type="email" id="linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/userID/" onChange={handleChange} /><br></br></li>
                                    <li><label for="phone">Phone:</label><br></br></li>
                                    <li><input class='input' type="tel" id="phone" name="phone" placeholder="0123456789" onChange={handleChange} /><br></br></li>
                                    <br></br>
                                </ul>
                            </div>
                        </form >
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
                            {/* <tr>
                            <th scope="row">1</th>
                            <td>{state?.degree?.institution}</td>
                            <td>{state?.degree?.subject}</td>
                            <td>{state?.degree?.level}</td>
                            <td>{state?.degree?.grade}</td>
                            <td>{state?.degree?.dateFrom}</td>
                            <td>{state?.degree?.dateTo}</td>
                            <td>{state?.degree?.description}</td>
                        </tr> */}
                            {allDegreeData.map(degree => {
                                return (
                                    <tr>
                                        <th scope="row">{degreeTableRow++}</th>
                                        <td>{degree.institution}</td>
                                        <td>{degree.subject}</td>
                                        <td>{degree.level}</td>
                                        <td>{degree.grade}</td>
                                        <td>{degree.dateFrom}</td>
                                        <td>{degree.dateTo}</td>
                                        <td>{degree.description}</td>
                                    </tr>
                                )
                            })}




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
                            {allSchoolData.map(school => {
                                return (
                                    <tr>
                                        <th scope="row">{schoolTableRow++}</th>
                                        <td>{school.school}</td>
                                        <td>{school.examType}</td>
                                        <td>{school.subject}</td>
                                        <td>{school.grade}</td>
                                        <td>{school.year}</td>
                                        <td>{school.description}</td>
                                    </tr>
                                )
                            }
                            )
                            }





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
                            {allWorkData.map(work => {
                                return (
                                    <tr>
                                        <th scope="row">{workTableRow++}</th>
                                        <td>{work.experience}</td>
                                        <td>{work.institution}</td>
                                        <td>{work.position}</td>
                                        <td>{work.dateFrom}</td>
                                        <td>{work.dateTo}</td>
                                        <td>{work.description}</td>
                                    </tr>)
                            }
                            )

                            }



                        </tbody>

                    </table>
                </div>
                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Certificates and Awards"} />
                    </div>
                    <AwardModal />
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Type</th>
                                <th scope="col">Issuer</th>
                                <th scope="col">Award</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Date Awarded </th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allAwardData.map(award => {
                                return (
                                    <tr>
                                        <th scope="row">{awardTableRow++}</th>
                                        <td>{award.type}</td>
                                        <td>{award.issuer}</td>
                                        <td>{award.award}</td>
                                        <td>{award.grade}</td>
                                        <td>{award.dateAwarded}</td>
                                        <td>{award.description}</td>
                                    </tr>)
                            }
                            )



                            }



                        </tbody>

                    </table>
                </div>
                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Portfolio"} />
                    </div>
                    <PortfolioModal />
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">URL</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPortfolioData.map(portfolio => {
                                return (
                                    <tr>
                                        <th scope="row">{portfolioTableRow++}</th>
                                        <td>{portfolio.title}</td>
                                        <td>{portfolio.url}</td>
                                        <td>{portfolio.description}</td>
                                    </tr>)
                            }
                            )

                            }



                        </tbody>

                    </table>
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
                                    <li><input className='input' type="text" id="cohort" name="cohort" placeholder="3" onChange={handleChange} /><br></br></li>
                                    <li><label for="learning">Learning:</label><br></br></li>
                                    <li><input className='input' type="text" id="learning" name="learning" placeholder="Learning path" onChange={handleChange} /><br></br></li>
                                    <li><label for="trainer">Trainer:</label><br></br></li>
                                    <li><input className='input' type="text" id="trainer" name="trainer" placeholder="John Doe" onChange={handleChange} /><br></br></li>
                                    <li><label for="trainer">Trainee finishing date:</label><br></br></li>
                                    <li><input className='input' type="date" id="traineeFinishingDate" name="traineeFinishingDate" onChange={handleChange} /><br></br></li>
                                </ul>
                            </div>
                            <div className='sub-entry'>
                                <ul className='list' id='right'>
                                    <li><label for="github">Challenges:</label><br></br></li>
                                    <li><input className='input' type="text" id="challengeOne" name="challengeOne" placeholder="Challenge A" onChange={handleChange} /><br></br></li>
                                    <li><input className='input' type="text" id="challengeTwo" name="challengeTwo" placeholder="Challenge B" onChange={handleChange} /><br></br></li>
                                    <li><input className='input' type="text" id="challengeThree" name="challengeThree" placeholder="Challenge C" onChange={handleChange} /><br></br></li>
                                    <li><input className='input' type="text" id="challengeFour" name="challengeFour" placeholder="Challenge D" onChange={handleChange} /><br></br></li>
                                    <li><input className='input' type="text" id="challengeFive" name="challengeFive" placeholder="Challenge E" onChange={handleChange} /><br></br></li>
                                    <li><input className='input' type="text" id="challengeSix" name="challengeSix" placeholder="Challenge F" onChange={handleChange} /><br></br></li>
                                    <br></br>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>

                <div className=' container shadow p-3 mb-5 bg-body rounded'>
                    <div className="row">
                        <div className="col-sm-5">
                            <button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Submit Profile Changes</button>
                        </div>
                        <div className="col-sm-5">
                            <button type="button" className="btn btn-info btn-custom">Cancel Changes </button>
                        </div>
                        <div className="col-sm-2">
                            <button type="reset" className="btn btn-danger btn-custom">Reset</button>
                        </div>
                    </div>
                </div>

                {/* <div className=' container shadow p-3 mb-5 bg-body rounded'>
                    <input type="button" value="Submit profile changes" className="btn btn-primary btn-custom" /> */}
                {/* <input type="button" value="Click Me!" onclick={submitForms()} /> */}
                {/* </div> */}

            </body>
        </>
    )
}