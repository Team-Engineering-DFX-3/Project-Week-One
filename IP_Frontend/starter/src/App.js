import '../src/Component/css/App.css';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { useState } from 'react';
import Home from './Component/Home';
import Header from './Component/Header/Header';
//import Industry from './Component/Industry';
import IndustryProfile from './Component/IndustryProfile';
import IndustryProfileEdit from './Component/IndustryProfileEdit';
import Vacancy from './Component/Vacancy';
import VacancyRegister from './Component/VacancyRegister';
=======
import Home from './Component/Home';
import Header from './Component/Header/Header';
import AddIndustry from './Component/AddIndustry';
import AddVacancy from './Component/AddVacancy';
import Industry from './Component/Industry';
import IndustryProfile from './Component/IndustryProfile';
import IndustryProfileEdit from './Component/IndustryProfileEdit';
import Vacancies from './Component/Vacancies';
>>>>>>> 0ef988dc2222971907a1536b11f59204739a99d1
import UserProfile from './Component/UserProfile';
import UserProfileEdit from './Component/UserProfileEdit';

function App() {
<<<<<<< HEAD
 
=======
>>>>>>> 0ef988dc2222971907a1536b11f59204739a99d1
  return (
    <div className="App">
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />

        
        <Route path="/editIndustry" element={<IndustryProfileEdit />} />

        <Route path="/vacancy" element={<Vacancy />} />
		<Route path="/registerVacancy" element={<VacancyRegister />} />

        <Route path="/user" element={<UserProfile /> } />
=======
        <Route path="/addIndustry" element={<AddIndustry />} />
        <Route path="/addVacancy" element={<AddVacancy />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/industry/:id" element={<IndustryProfile />} />
        <Route path="/editIndustry/:id" element={<IndustryProfileEdit />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/user" element={<UserProfile />} />
>>>>>>> 0ef988dc2222971907a1536b11f59204739a99d1
        <Route path="/UserEdit" element={<UserProfileEdit />} />
      </Routes>
    </div>
  )
}

export default App;