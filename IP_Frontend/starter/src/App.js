import '../src/Component/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Component/Home';
import Header from './Component/Header/Header';
import HomePage from './Component/HomePage';
import Login from './Component/Login';
import Register from './Component/Register';

//import Industry from './Component/Industry';
import IndustryProfile from './Component/IndustryProfile';
import IndustryProfileEdit from './Component/IndustryProfileEdit';
import AddIndustry from './Component/AddIndustry';
import AddVacancy from './Component/AddVacancy';
import Industry from './Component/Industry';
import Vacancies from './Component/Vacancies';
import UserProfile from './Component/UserProfile';
import UserProfileEdit from './Component/UserProfileEdit';
import GraduateSpotlight from './Component/GraduateSpotlight';
import Vacancy from './Component/Vacancy';
import VacancyRegister from './Component/VacancyRegister';

function App() {
  // const serverURL = 'https://cors-anywhere.herokuapp.com/ec2-34-206-125-202.compute-1.amazonaws.com:4000'

  function App() {

    const [user, setLoginUser] = useState({});

    return (

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact path="/"
            element={
              <>
                {user && user._id ? <Home setLoginUser={setLoginUser} user={user} /> : <Login setLoginUser={setLoginUser} />}
              </>
            } />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editIndustry" element={<IndustryProfileEdit />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/registerVacancy" element={<VacancyRegister />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/addIndustry" element={<AddIndustry />} />
          <Route path="/addVacancy" element={<AddVacancy />} />
          <Route path="/industries" element={<Industry />} />
          <Route path="/industry/:id" element={<IndustryProfile />} />
          <Route path="/editIndustry/:id" element={<IndustryProfileEdit />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/UserEdit" element={<UserProfileEdit />} />
          <Route path="/GraduateSpotlight" element={<GraduateSpotlight />} />
        </Routes >
      </div >
    )
  }

  export default App;