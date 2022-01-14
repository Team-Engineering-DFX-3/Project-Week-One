import React from 'react'
import { useState, useEffect } from 'react';
import '../Component/css/App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'

export default function UserProfile() {
    const [allDegreeData, setAllDegreeData] = useState([]);
    const [allWorkData, setAllWorkData] = useState([]);
    const [allSchoolData, setAllSchoolData] = useState([]);
    const [allUserData, setAllUserData] = useState([]);
    const [allPortfolioData, setAllPortfolioData] = useState([]);
    const [allAwardData, setAllAwardData] = useState([]);

    useEffect(() => {
        async function getDegrees() {
            let response = await axios.get('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editDegree');
            setAllDegreeData(response.data.degrees)
        }

        getDegrees()
    }, [])



    useEffect(() => {
        async function getWork() {
            let response = await axios.get('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editWork');
            setAllWorkData(response.data.work)
        }

        getWork()
    }, [])

    useEffect(() => {
        async function getSchool() {
            let response = await axios.get('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editSchool');
            setAllSchoolData(response.data.schools)
        }

        getSchool()
    }, [])

    useEffect(() => {
        async function getPortfolio() {
            let response = await axios.get('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editPortfolio');
            setAllPortfolioData(response.data.portfolio)
            console.log(response.data.portfolio);
        }

        getPortfolio()
    }, [])

    useEffect(() => {
        async function getAward() {
            let response = await axios.get('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editAward');
            setAllAwardData(response.data.awards)
            console.log(response.data.awards);
        }
        getAward()
    }, [])

    useEffect(() => {
        async function getUser() {
            let response = await axios.get('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editUser');
            setAllUserData(response.data)
        }
        getUser()
    }, [])

    return (
        <>
            <body className='body'>
                <div className='container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Your Profile"} />
                    </div>

                    <div className='row'>
                        <h1 className="align-left">

                            <Link to="/UserEdit">
                                <button id="editButton" type="button" className="btn btn-primary">
                                    Edit
                                </button>
                            </Link>
                        </h1>

                        <ul className='list col-sm body-align-left' id='left'>
                            <li><strong>Name:</strong>{allUserData ? allUserData.map(user => <div>{user.name}<br></br> </div>) : <div >No Name found!</div>} </li> <br />
                            <li><strong>Personal email:</strong>{allUserData ? allUserData.map(user => <div>{user.pemail}<br></br> </div>) : <div >No personal email found!</div>} </li><br />
                            <li><strong>Digital Futures email:</strong>{allUserData ? allUserData.map(user => <div>{user.dfemail}<br></br> </div>) : <div >No Digital Futures email found!</div>} </li> <br />
                            <li><strong>Github:</strong>{allUserData ? allUserData.map(user => <div>{user.github}<br></br> </div>) : <div >No github found!</div>} </li> <br />
                            <li><strong>LinkedIn:</strong>{allUserData ? allUserData.map(user => <div>{user.linkedin}<br></br> </div>) : <div >No LinkedIn found!</div>} </li> <br />
                            <li><strong>Phone:</strong>{allUserData ? allUserData.map(user => <div>{user.phone}<br></br> </div>) : <div >No Number found!</div>} </li> <br />
                        </ul>
                        <ul className='list col-md body-align-left' id='right'>
                            <li><strong>Personal Story Summary</strong></li>
                            <div className='container shadow p-3 mb-5 bg-body rounded'>
                                <ul className='list col-sm'>
                                    <li><strong>Degree:</strong>{allDegreeData[0] ? allDegreeData.map(degree => <div className="p-3 mb-2 bg-light text-dark"><b>Institution: </b>{degree.institution}<br></br><b>Subject: </b>{degree.subject}<br></br><b>Level: </b> {degree.level}<br></br><b>Grade: </b> {degree.grade}<br></br><b>Start Date: </b> {degree.dateFrom}<br></br><b>End Date: </b> {degree.dateTo}<br></br><b>Description: </b> {degree.description}<br></br> </div>) : <div >No Degrees found!</div>}</li> <br />
                                    <li><strong>School qualifications: </strong> {allSchoolData[0] ? allSchoolData.map(school => <div className="p-3 mb-2 bg-light text-dark"><b>School: </b>{school.school}<br></br><b>Exam: </b>{school.examType}<br></br><b>Subject: </b> {school.subject}<br></br> <b>Grade: </b>{school.grade}<br></br><b>Year: </b> {school.year}<br></br><b>Description: </b>  {school.description}<br></br> </div>) : <div >No School found!</div>}</li> <br />
                                    <li><strong>Work experience:</strong>{allWorkData[0] ? allWorkData.map(work => <div className="p-3 mb-2 bg-light text-dark"><b>Experience: </b>{work.experience}<br></br><b>Institution: </b>{work.institution}<br></br><b>Position: </b> {work.position}<br></br><b>Start Date: </b>{work.dateFrom}<br></br><b>End Date: </b> {work.dateTo}<br></br><b>Description: </b>  {work.description}<br></br> </div>) : <div >No Work found!</div>}</li> <br />
                                    <li><strong>Personal Achievements:</strong>{allAwardData[0] ? allAwardData.map(award => <div className="p-3 mb-2 bg-light text-dark"><b>Type: </b>{award.type}<br></br><b>Issuer: </b>{award.issuer}<br></br><b>Award: </b> {award.award}<br></br><b>Grade: </b>{award.grade}<br></br><b>Date Awarded: </b>{award.dateAwarded}<br></br><b>Description: </b>{award.description}<br></br></div>) : <div >No Award found!</div>}</li><br />
                                    <li><strong>Portfolio:</strong>{allPortfolioData[0] ? allPortfolioData.map(portfolio => <div className="p-3 mb-2 bg-light text-dark"><b>Title: </b>{portfolio.title}<br></br><b>URL: </b>{portfolio.url}<br></br><b>Description: </b> {portfolio.description}<br></br></div>) : <div >No Portfolio found!</div>}</li>  <br />
                                </ul>
                            </div>
                        </ul>
                        <div>
                            <div className="progress row">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Your Training"} />
                    </div>
                    <div className='row'>
                        <ul className='list col-sm body-align-left' id='left'>
                            <li><strong>Cohort:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.cohort}<br></br> </div>) : <div >No Cohort email found!</div>}</li><br />
                            <li><strong>Trainer:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.trainer}<br></br> </div>) : <div >No Trainer found!</div>}</li><br />
                            <li><strong>Trainee finishing date:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.traineeFinishingDate}<br></br> </div>) : <div >No Grade found!</div>}</li><br />
                        </ul>
                        <ul className='list col-md' id='right'>
                            <div className='container shadow p-3 mb-5 bg-body rounded'>
                                <ul className='list col-sm body-align-left'>
                                    <li className="p-3 mb-2 bg-light text-dark"><strong>Challenge 1:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.challengeOne}<br></br> </div>) : <div >No Challenge found!</div>}</li>
                                    <li className="p-3 mb-2 bg-light text-dark"><strong>Challenge 2:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.challengeTwo}<br></br> </div>) : <div >No Challenge found!</div>}</li>
                                    <li className="p-3 mb-2 bg-light text-dark"><strong>Challenge 3:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.challengeThree}<br></br> </div>) : <div >No Challenge found!</div>}</li>
                                    <li className="p-3 mb-2 bg-light text-dark"><strong>Challenge 4:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.challengeFour}<br></br> </div>) : <div >No Challenge found!</div>}</li>
                                    <li className="p-3 mb-2 bg-light text-dark"><strong>Challenge 5:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.challengeFive}<br></br> </div>) : <div >No Challenge found!</div>}</li>
                                    <li className="p-3 mb-2 bg-light text-dark"><strong>Challenge 6:</strong>{allUserData[0] ? allUserData.map(user => <div>{user.challengeSix}<br></br> </div>) : <div >No Challenge found!</div>}</li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* <div className='container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title={"Your Information"} />
                    </div>
                    <div className='row'>

                        <ul className="list col-sm body-align-left">
                            <div className='container shadow p-3 mb-5 bg-body rounded'>
                                <h3>Badge A</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ut tempore reiciendis consequuntur rerum odio exercitationem enim fugiat at quas?</p>
                            </div>
                        </ul>

                        <ul className="list col-sm body-align-left">
                            <div className='container shadow p-3 mb-5 bg-body rounded'>
                                <h3 >Badge B</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ut tempore reiciendis consequuntur rerum odio exercitationem enim fugiat at quas?</p>
                            </div>
                        </ul>

                        <div className='col-sm' id='left'>
                        </div>

                        <ul className="list col-md body-align-left">
                            <li className="margin"><strong>Scores:</strong></li>
                            <div className='container containerHeight shadow p-3 mb-5 bg-body rounded overflow'>
                                <ul className='list col-md'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque unde temporibus possimus, velit, fuga voluptate quidem harum cumque fugit voluptatem nemo adipisci nulla eos doloremque assumenda numquam consequuntur. Nihil vero a, quod delectus nesciunt fugiat illo asperiores unde earum dolorum tenetur minima veniam quidem rerum qui necessitatibus doloremque ex accusantium culpa ipsa minus rem ipsam autem obcaecati. Delectus recusandae nulla facilis. Enim dolore mollitia ipsam possimus. Consequatur doloremque reprehenderit iusto illo ad libero voluptas? Neque saepe, magni deserunt sit odio architecto ex maiores ratione optio fugit doloribus dolor, corporis aspernatur error similique accusamus distinctio, iusto quos impedit. Voluptatibus itaque aliquam velit, quo est numquam minus officiis magnam cupiditate dignissimos voluptas explicabo ipsum aliquid sint. Harum odit libero, exercitationem ipsam asperiores id. Doloribus, placeat. Placeat itaque deserunt totam quos, impedit veniam repudiandae optio vel quidem maxime esse nisi maiores odio quia iusto, assumenda reiciendis dolore enim ad cupiditate saepe aperiam est. Non eius voluptas officiis dignissimos nesciunt animi unde quam accusantium nobis consectetur, recusandae quaerat ad totam, neque ipsum porro dolores libero. Est veritatis sequi modi. Dolorem, aut illo dolore accusantium quae, commodi aperiam laudantium reprehenderit modi enim distinctio! Illo, voluptate. Earum excepturi maxime hic, atque temporibus possimus, placeat impedit quas nulla tempora, quia facere? Molestias incidunt, quis iure ut sed fugiat saepe adipisci deserunt totam ipsum dolorem, alias officiis excepturi. Esse, nulla? In quidem dolore eum adipisci, minima vitae illum similique, praesentium ipsum provident nisi ipsa at nesciunt numquam odio dicta, expedita sequi maxime ut? Corrupti, odit laudantium porro amet officia ab vitae inventore facere tenetur fugiat quia error perspiciatis nisi pariatur esse nesciunt enim non accusantium dignissimos velit tempore eligendi! Nam maxime harum eum vitae debitis a eaque vero! Dolores natus, cumque quae nesciunt nobis eligendi itaque asperiores porro mollitia modi autem, possimus provident, doloremque vel recusandae consequuntur corporis! Doloremque beatae consequuntur molestiae? Aspernatur esse ipsa totam est rem doloribus id nostrum autem velit minus atque ea ad veritatis quod quisquam enim, iusto nesciunt et vitae quidem ducimus eos excepturi? Quas quaerat ad, dolor deserunt saepe doloremque, nihil qui sed laborum voluptas ratione enim culpa! Commodi reiciendis temporibus ducimus praesentium perferendis nostrum fuga deserunt laboriosam dolor eveniet. Perspiciatis error libero nisi tempora ducimus ad accusantium ullam, qui minus, ut eveniet et voluptatum sunt? Nesciunt enim molestiae, excepturi perspiciatis, optio corporis expedita similique deserunt deleniti, rerum nostrum laboriosam reiciendis. Delectus dolorum quis repellendus minima. Saepe repellendus minima tenetur aspernatur beatae doloremque repudiandae corrupti adipisci quod expedita delectus, sequi, quam perspiciatis asperiores, facilis possimus officia ut sapiente laboriosam reprehenderit non dignissimos. Odio quae aut quia ipsam cumque nobis odit sequi molestiae. Vero, quam optio quaerat odit placeat aut quibusdam, est non sunt voluptate rem consequuntur ex distinctio deleniti quos molestias voluptates laboriosam temporibus corrupti hic incidunt soluta saepe. Vel beatae ut, recusandae repellat unde incidunt nisi dolore dolores! Suscipit, neque aspernatur praesentium error nemo veritatis sapiente, nisi aut sunt distinctio facere? Porro dolor illo expedita beatae. Sed quod nemo excepturi facilis dolore ab. Aperiam pariatur sint, mollitia reprehenderit dolores veniam amet facere ad magnam optio eos eaque maiores quos. Sapiente placeat ipsum velit dicta iste! Qui a similique illo </p>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div> */}
            </body>
        </>
    )
}
