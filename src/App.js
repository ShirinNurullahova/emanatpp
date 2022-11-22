import React, { Fragment, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Header from './components/LayoutComponents/Header/Header';
import Footer from './components/LayoutComponents/Footer/Footer';
import Loader from './components/LayoutComponents/Loader/Loader';
import TerminalLocationFormPage from './pages/TerminalLocationFormPage';
import BiznesFormPage from './pages/BiznesFormPage';
import PaymentPage from './pages/PaymentPage';

import HrPage from './pages/HrPage';
import HrSecondPage from './pages/HrSecondPage';

const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage')); // Lazy-loaded
const CareerPage = React.lazy(() => import('./pages/CareerPage')); // Lazy-loaded
const ServicesPage = React.lazy(() => import('./pages/ServicesPage')); // Lazy-loaded
const Coorperative = React.lazy(() => import('./pages/Coorperative')); // Lazy-loaded
const ContactPage = React.lazy(() => import('./pages/ContactPage')); // Lazy-loaded
const FaqPage = React.lazy(() => import('./pages/FaqPage')); // Lazy-loaded
const Hr = React.lazy(() => import('./pages/HrPage')); // Lazy-loaded
const NewVacancies = React.lazy(() => import('./pages/NewVacancies')); // Lazy-loaded
const VacancyDetails = React.lazy(() => import('./pages/VacancyDetail')); // Lazy-loaded
const BonusPage = React.lazy(() => import('./pages/BonusPage')); // Lazy-loaded
const AllVacanciesPage = React.lazy(() => import('./pages/AllVacanciesPage')); // Lazy-loaded
const TerminalMapPage = React.lazy(() => import('./pages/TerminalMapPage')); // Lazy-loaded
const TerminalUsageRulesPage = React.lazy(() => import('./pages/TerminalUsageRulesPage')); // Lazy-loaded
const NewPage = React.lazy(() => import('./pages/NewsPage'));
const UniPage = React.lazy(() => import('./pages/UniPage'));
const MarketingPage = React.lazy(() => import('./pages/MarketingPage'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Header />

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/coorperative" element={<Coorperative />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/hr' element={<HrPage />} />
          <Route path='/internship' element={<HrSecondPage />} />
          <Route path='/internship/:id' element={<BonusPage />} />
          <Route path='/newVacancies' element={<NewVacancies />} />
          <Route path='/all-vacancies/:id' element={<VacancyDetails />} />
          <Route path='/all-vacancies' element={<AllVacanciesPage />} />
          <Route path='/terminal-map' element={<TerminalMapPage />} />
          <Route path='/terminal-usage-rules' element={<TerminalUsageRulesPage />} />
          <Route path='/news' element={<NewPage />} />
          <Route path='/news/:id' element={<BonusPage />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/uni' element={<UniPage />} />
          <Route path='/marketingform' element={<MarketingPage />} />
          <Route path='/terminallocation' element={<TerminalLocationFormPage />} />
          <Route path='/biznesform' element={<BiznesFormPage />} />
          <Route path='/payment' element={<PaymentPage />} />

        </Routes>

        <Footer />

      </Suspense>
    </Fragment>

  );
}

export default App;
