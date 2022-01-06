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
        profile: {
            institution: "DigitalFutures", subject: "Lorem ipsum", level: "London", grade: "grade", dateFrom: "21-32-5434", dateTo: "21-32-5434", description: "Lorem ipsum"
        }
    };
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
                    <p>institution: {state?.degree?.institution}</p>
                </div>
                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"School Qualifications"} />
                    </div>
                    <SchoolModal />
                </div>
                <div className=' container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Work Experience"} />
                    </div>
                    <WorkModal />
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
                            <button type="submit" className="btn btn-primary btn-custom">Submit Profile Changes</button>
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