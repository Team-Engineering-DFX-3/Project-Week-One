import React from 'react'
import '../Component/css/App.css';
import DegreeModal from './Modal/DegreeModal';
import SchoolModal from './Modal/SchoolModal';
import WorkModal from './Modal/WorkModal'
import AwardModal from './Modal/AwardModal';
import PortfolioModal from './Modal/PortfolioModal';
import { Link, useLocation} from 'react-router-dom';
import FormOne from './Forms/FormOne'
import ContainerHeader from './Header/ContainerHeader'

// const submitForms = () => {
//     document.getElementById("1").submit();
//     document.getElementById("2").submit();
// }



export default function UserProfileEdit() {
    const location = useLocation();
    const state = location.state || {
        degree: {
            institution: "DigitalFutures", subject: "Lorem ipsum", level: "London", grade: "grade", dateFrom: "21-32-5434", dateTo: "21-32-5434", description: "Lorem ipsum"
        },

        work: {
            experience: `Experience`,
            institution: `Digital Futures`,
            position: `Software Engineer`,
            dateFrom: `1-1-2022`,
            dateTo: `21-12-2022`,
            description: `Lorem ipsum`
        },
        
        school: {
            school: `name`, examType: `qualification `,subject: ` subject type `, grade: `A-E`,year: `0000-0000`,description: `Lorem ipsum`
        }
    };

   
    // const handleSubmit = async (e) => {
    //     console.log("entered handle");
        
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://127.0.0.1:4000/editDegree', degreeData);
    //         console.log('hi');
    //         alert(response.data.message);
    //         console.log(response.data.degree);
    //         setDegreeData(response.data.degree);
    //         navigate('/UserEdit', { state: response.data });

    //     }
    //     catch (e) {
    //         return "failure";
    //     }
    // };
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
                                <th scope="col">institution</th>
                                <th scope="col">subject</th>
                                <th scope="col">level</th>
                                <th scope="col">grade</th>
                                <th scope="col">date from</th>
                                <th scope="col">date to </th>
                                <th scope="col">description </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{state?.degree?.institution}</td>
                            <td>{state?.degree?.subject}</td>
                            <td>{state?.degree?.level}</td>
                            <td>{state?.degree?.grade}</td>
                            <td>{state?.degree?.dateFrom}</td>
                            <td>{state?.degree?.dateTo}</td>
                            <td>{state?.degree?.description}</td>
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
                                <th scope="col">school</th>
                                <th scope="col"> Exam Type </th>
                                <th scope="col">Subject</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Year</th>
                                <th scope="col">description </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{state?.school?.school}</td>
                                <td>{state?.school?.examType}</td>
                                <td>{state?.school?.subject}</td>
                                <td>{state?.school?.grade}</td>
                                <td>{state?.school?.year}</td>
                                <td>{state?.school?.description}</td>
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
                                <th scope="col">experience</th>
                                <th scope="col">institution</th>
                                <th scope="col">subject</th>
                                <th scope="col">Starting date</th>
                                <th scope="col">End date</th>
                                <th scope="col">description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{state?.work?.experience}</td>
                                <td>{state?.work?.institution}</td>
                                <td>{state?.work?.position}</td>
                                <td>{state?.work?.dateFrom}</td>
                                <td>{state?.work?.dateTo}</td>
                                <td>{state?.work?.description}</td>
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

                {/* <div className=' container shadow p-3 mb-5 bg-body rounded'>
                    <input type="button" value="Submit profile changes" className="btn btn-primary btn-custom" /> */}
                {/* <input type="button" value="Click Me!" onclick={submitForms()} /> */}
                {/* </div> */}

            </body>
        </>
    )
}