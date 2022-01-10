import '../src/Component/css/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Component/Home';
import Header from './Component/Header/Header';
import IndustryProfile from './Component/IndustryProfile';
import IndustryProfileEdit from './Component/IndustryProfileEdit';
import Vacancy from './Component/Vacancy';
import VacancyRegister from './Component/VacancyRegister';
import UserProfile from './Component/UserProfile'
import UserProfileEdit from './Component/UserProfileEdit'

function App() {
  const [industryData, setIndustryData] = useState({});
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<IndustryProfile industryData={industryData} />} />
        <Route path="/edit" element={<IndustryProfileEdit />} />
        <Route path="/registerVacancy" element={<VacancyRegister />} />

        <Route path="/user" element={<UserProfile />} />
        <Route path="/UserEdit" element={<UserProfileEdit />} />
      </Routes>
    </div>
  )
}

export default App;
