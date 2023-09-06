// import Header from './components/Header';
import Footer from './components/Footer';
import Submain from './components/Submain';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Mypage from './pages/Mypage';

function App() {
    return (
        <>
            {/* <Header /> */}
            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="/submain" element={<Submain />} />
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
