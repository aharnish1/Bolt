import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlumniDirectory from './pages/AlumniDirectory';
import Jobs from './pages/Jobs';
import Events from './pages/Events';
import Donations from './pages/Donations';
import Mentorship from './pages/Mentorship';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Messaging from './pages/Messaging';
import ReferralRequests from './pages/ReferralRequests';
import PostedItems from './pages/PostedItems';
import Placeholder from './pages/Placeholder';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <>
                <TopNavbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/alumni-directory" element={<AlumniDirectory />} />
                  <Route path="/student-directory" element={<Placeholder title="Student Directory" icon="fa-user-graduate" />} />
                  <Route path="/stories" element={<Placeholder title="Stories & Achievements" icon="fa-star" />} />
                  <Route path="/gallery" element={<Placeholder title="Gallery" icon="fa-images" />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/internships" element={<Placeholder title="Internships" icon="fa-laptop-code" />} />
                  <Route path="/mentorship" element={<Mentorship />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/donations" element={<Donations />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/messaging" element={<Messaging />} />
                  <Route path="/referral-requests" element={<ReferralRequests />} />
                  <Route path="/posted-items" element={<PostedItems />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
