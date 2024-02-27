import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ArtWorksPage from './Pages/ArtWorksPage';
import data from './Components/ArtWorksData.json'

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/artworksdisplay" element={<ArtWorksPage artworks={data}/>} />
      </Routes>
  );
}

export default App;
