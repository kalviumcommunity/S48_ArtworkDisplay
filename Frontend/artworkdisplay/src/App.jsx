import './App.css';
import { Routes, Route } from 'react-router-dom';
// import LandingPage from './Pages/LandingPage';
// import ArtWorksPage from './Pages/ArtWorksPage';
// import Feedback from './Pages/FeedbackPage'
// import SignIn from './Pages/Loginpage'
// import SignUp from './Pages/SginUp'
import Users from './CRUD/Users';
import CreateUsers from './CRUD/CreateUers';
import UpdateUsers from './CRUD/UdateUser';



function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/artworksdisplay" element={<ArtWorksPage/>} />
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route> */}
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<CreateUsers />} />
        <Route path='/update/:id' element={<UpdateUsers />} />
      </Routes>
  );
}

export default App;
