import '../src/Component/css/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Component/Home';
import Header from './Component/Header/Header';
import IndustryProfile from './Component/IndustryProfile';
import IndustryProfileEdit from './Component/IndustryProfileEdit';
import RegisteredUsers from './Component/RegisteredUsers';
import VacancyProfile from './Component/VacancyProfile';
import VacancyProfileEdit from './Component/VacancyProfileEdit';
import AllVacancies from './Component/AllVacancies';
import Vacancy from './Component/Vacancy';
import VacancyRegister from './Component/VacancyRegister';
import HomePage from './Component/HomePage';
import Login from './Component/Login';
import Register from './Component/Register';
import AddIndustry from './Component/AddIndustry';
import AddVacancy from './Component/AddVacancy';
import Industry from './Component/Industry';
import Vacancies from './Component/Vacancies';
import UserProfile from './Component/UserProfile';
import UserProfileEdit from './Component/UserProfileEdit';
import GraduateSpotlight from './Component/GraduateSpotlight';

function App() {


  const [user, setLoginUser] = useState({});

  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/editVacancy/:id" element={<VacancyProfileEdit />} />
        <Route path="/registerVacancy/:id" element={<VacancyRegister />} />
        <Route
          exact path="/"
          element={
            <>
              {user && user._id ? <Home setLoginUser={setLoginUser} user={user} /> : <Login setLoginUser={setLoginUser} />}
            </>
          } />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/addIndustry" element={<AddIndustry />} />
        <Route path="/addVacancy/:id" element={<AddVacancy />} />
        <Route path="/vacancyProfile/:id" element={<VacancyProfile />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/industry/:id" element={<IndustryProfile />} />
        <Route path="/registeredUsers" element={<RegisteredUsers />} />
        <Route path="/editIndustry/:id" element={<IndustryProfileEdit />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/allVacancies" element={<AllVacancies />} />
        <Route path="/UserEdit" element={<UserProfileEdit />} />
        <Route path="/GraduateSpotlight" element={<GraduateSpotlight />} />
      </Routes >
    </div >
  )
}

export default App;