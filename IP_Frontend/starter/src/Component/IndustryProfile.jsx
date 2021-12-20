import barclays from '../Component/images/barclays.png';
import '../Component/css/App.css';
import { Link, useLocation } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader'
const Industry_Profile = ({ industryData }) => {
    const location = useLocation();
    const state = location.state || {
        profile: {
            name: "Digital Futures", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur ?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur ?", location: "London"
        }
    };
    return (
        <>
            <div class="container shadow mb-5 bg-body rounded" >
                <div class='row'>
                    <ContainerHeader title={state?.profile?.name} />
                </div>
                <div class="row">
                    <div class=" col-sm body-align-left" id='left'>
                        <Link to="/edit">
                            <button id="editButton" type="button" class="btn btn-primary">Edit Profile</button>
                        </Link>

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