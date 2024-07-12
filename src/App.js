import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollegeSignupPage from './pages/CollegeSignupPage';
import LoginPage from './pages/CollegeLoginPage';
import CollegeProfilePage from './pages/CollegeProfile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<CollegeSignupPage />} />
                <Route path="/profile" element={<CollegeProfilePage />} />
            </Routes>
        </Router>
    );
}

export default App;
