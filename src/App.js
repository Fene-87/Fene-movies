import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import DetailsPage from './pages/detailsPage/DetailsPage';
import MoviesPage from './pages/moviesPage/MoviesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/details' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
