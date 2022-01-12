import '../src/Component/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Header from './Component/Header/Header';
import IndustryProfile from './Component/IndustryProfile';
import IndustryProfileEdit from './Component/IndustryProfileEdit';
import VacancyProfile from './Component/VacancyProfile';
import VacancyProfileEdit from './Component/VacancyProfileEdit';
import Vacancy from './Component/Vacancy';
import VacancyRegister from './Component/VacancyRegister';
import AddIndustry from './Component/AddIndustry';
import AddVacancy from './Component/AddVacancy';
import Industry from './Component/Industry';
import Vacancies from './Component/Vacancies';
import UserProfile from './Component/UserProfile';
import UserProfileEdit from './Component/UserProfileEdit';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editIndustry" element={<IndustryProfileEdit />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/editVacancy/:id" element={<VacancyProfileEdit />} />
        <Route path="/registerVacancy" element={<VacancyRegister />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/addIndustry" element={<AddIndustry />} />
        <Route path="/addVacancy" element={<AddVacancy />} />
        <Route path="/vacancyProfile/:id" element={<VacancyProfile />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/industry/:id" element={<IndustryProfile />} />
        <Route path="/editIndustry/:id" element={<IndustryProfileEdit />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/UserEdit" element={<UserProfileEdit />} />
      </Routes>
    </div>
  )
}

export default App;