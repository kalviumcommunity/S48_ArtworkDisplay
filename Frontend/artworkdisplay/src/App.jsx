import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ArtWorksPage from './Pages/ArtWorksPage';
import data from './Components/ArtWorksData.json';
import Feedback from './Pages/FeedbackPage'
import SignIn from './Pages/Loginpage'
import SignUp from './Pages/SginUp'



function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/artworksdisplay" element={<ArtWorksPage artworks={data}/>} />
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
  );
}

export default App;
