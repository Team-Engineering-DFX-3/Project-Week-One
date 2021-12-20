import React from 'react'
import '../Component/css/App.css';
import DegreeModal from './Modal/DegreeModal';
import SchoolModal from './Modal/SchoolModal';
import WorkModal from './Modal/WorkModal'
import AwardModal from './Modal/AwardModal';
import PortfolioModal from './Modal/PortfolioModal';
import { Link } from 'react-router-dom';
import FormOne from './Forms/FormOne'
import ContainerHeader from './Header/ContainerHeader'

const submitForms = () => {
    document.getElementById("1").submit();
    document.getElementById("2").submit();
}


export default function UserProfileEdit() {
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

                <div className='modal-div container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Degree"} />
                    </div>
                    <DegreeModal />
                </div>
                <div className='modal-div container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"School Qualifications"} />
                    </div>
                    <SchoolModal />
                </div>
                <div className='modal-div container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Work Experience"} />
                    </div>
                    <WorkModal />
                </div>
                <div className='modal-div container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Certificates and Awards"} />
                    </div>
                    <AwardModal />
                </div>
                <div className='modal-div container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Portfolio"} />
                    </div>
                    <PortfolioModal />
                </div>

                <div className='modal-div container shadow mb-5 bg-body rounded'>
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

                <div classNameName='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <div classNameName="row">
                        <div classNameName="col-sm-5">
                            <button type="submit" classNameName="btn btn-primary btn-custom">Submit Profile Changes</button>
                        </div>
                        <div classNameName="col-sm-5">
                            <button type="button" classNameName="btn btn-info btn-custom">Cancel Changes </button>
                        </div>
                        <div classNameName="col-sm-2">
                            <button type="reset" classNameName="btn btn-danger btn-custom">Reset</button>
                        </div>
                    </div>
                </div>

                {/* <div className='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <input type="button" value="Submit profile changes" className="btn btn-primary btn-custom" /> */}
                {/* <input type="button" value="Click Me!" onclick={submitForms()} /> */}
                {/* </div> */}

            </body>
        </>
    )
}