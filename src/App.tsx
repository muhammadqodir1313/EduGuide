import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Directions = lazy(() => import('./pages/Directions'));
const Universities = lazy(() => import('./pages/Universities'));
const CareerTest = lazy(() => import('./pages/CareerTest'));
const Statistics = lazy(() => import('./pages/Statistics'));
const Subjects = lazy(() => import('./pages/Subjects'));
const DataExport = lazy(() => import('./pages/DataExport'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="p-6 text-center text-gray-600">Yuklanmoqda...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/directions" element={<Directions />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/test" element={<CareerTest />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/data-export" element={<DataExport />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;