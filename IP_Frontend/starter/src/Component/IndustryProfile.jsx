import barclays from '../Component/images/barclays.png';
import '../Component/css/App.css';
import { Link, useLocation } from "react-router-dom";
const Industry_Profile = ({ industryData }) => {
    const location = useLocation();
    const state = location.state || {
        profile: {
            name: "Digital Futures", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur ?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur ?", location: "London"
        }
    };
    return (
        <>
            <div class="container shadow p-3 mb-5 bg-body rounded" >
                <div class="row">
                    <div class=" col-sm body-align-left" id='left'>
                        <h1>
                            {state?.profile?.name}
                            <Link to="/edit">
                                <button id="editButton" type="button" class="btn btn-primary">Edit Profile</button>
                            </Link>
                        </h1>

                        <ul class="list">
                            <li>Company Description: {state?.profile?.description}</li>
                            <li>Location: {state?.profile?.location}</li>
                        </ul>
                    </div>

                    <div class='list col-md body-align-right' id='right'>
                        <li>
                            <div>
                                <img src={barclays} alt="Industry Logo" className="img-fluid" />
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Industry_Profile;