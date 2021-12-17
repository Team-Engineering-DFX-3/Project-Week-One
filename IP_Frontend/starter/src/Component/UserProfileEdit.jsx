import React from 'react'
import '../Component/css/App.css';
import DegreeModal from './Modal/DegreeModal';
import SchoolModal from './Modal/SchoolModal';
import WorkModal from './Modal/WorkModal'
import AwardModal from './Modal/AwardModal';
import PortfolioModal from './Modal/PortfolioModal';
import { Link } from 'react-router-dom';
import FormOne from './Forms/FormOne'



const submitForms = () => {
    document.getElementById("1").submit();
    document.getElementById("2").submit();
}


export default function UserProfileEdit() {
    return (
        <>
            <body class='body'>
                <div class='container shadow p-3 mb-5 bg-body rounded'>
                    <div class='row'>
                        <h1 class="align-left">
                            Edit profile
                            <Link to="/user">
                                <button id="editButton" type="button" class="btn btn-primary">
                                    Home
                                </button>
                            </Link>
                        </h1>
                        <FormOne />
                    </div>
                </div>

                <div class='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <h2 class="align-left">Degree</h2>
                    <DegreeModal />
                </div>
                <div class='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <h2 class="align-left">School Qualifications</h2>
                    <SchoolModal />
                </div>
                <div class='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <h2 class="align-left">Work Experience</h2>
                    <WorkModal />
                </div>
                <div class='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <h2 class="align-left">Certificates and Awards</h2>
                    <AwardModal />
                </div>
                <div class='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <h2 class="align-left">Portfolio</h2>
                    <PortfolioModal />
                </div>

                <div class='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <div class='row'>
                        <h1 class="align-left">
                            Your training
                        </h1>
                        <form action="/" id="2">
                            <div class='sub-entry'>
                                <ul class='list' id='left'>
                                    <li><label for="cohort">Cohort:</label><br></br></li>
                                    <li><input class='input' type="text" id="name" name="name" placeholder="John Doe" /><br></br></li>
                                    <li><label for="learning">Learning:</label><br></br></li>
                                    <li><input class='input' type="text" id="learning" name="learning" placeholder="Learning path" /><br></br></li>
                                    <li><label for="trainer">Trainer:</label><br></br></li>
                                    <li><input class='input' type="text" id="trainer" name="trainer" placeholder="John Doe" /><br></br></li>
                                    <li><label for="trainer">Trainee finishing date:</label><br></br></li>
                                    <li><input class='input' type="date" id="trainee" name="trainee" /><br></br></li>
                                </ul>
                            </div>
                            <div class='sub-entry'>
                                <ul class='list' id='right'>
                                    <li><label for="github">Challenges:</label><br></br></li>
                                    <li><input class='input' type="text" id="challenge-a" name="challenge-a" placeholder="Challenge A" /><br></br></li>
                                    <li><input class='input' type="text" id="challenge-b" name="challenge-b" placeholder="Challenge B" /><br></br></li>
                                    <li><input class='input' type="text" id="challenge-c" name="challenge-c" placeholder="Challenge C" /><br></br></li>
                                    <li><input class='input' type="text" id="challenge-d" name="challenge-d" placeholder="Challenge D" /><br></br></li>
                                    <li><input class='input' type="text" id="challenge-e" name="challenge-e" placeholder="Challenge E" /><br></br></li>
                                    <li><input class='input' type="text" id="challenge-f" name="challenge-f" placeholder="Challenge F" /><br></br></li>
                                    <br></br>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>

                <div class='modal-div container shadow p-3 mb-5 bg-body rounded'>
                    <input type="button" value="Submit profile changes" class="btn btn-primary btn-custom" />
                    {/* <input type="button" value="Click Me!" onclick={submitForms()} /> */}
                </div>

            </body>
        </>
    )
}