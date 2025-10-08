import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} /> {/* child route */}
          <Route path="about" element={<AboutPage />} /> {/* child route */}
          <Route path="coming-soon" element={<ComingSoon />} />{" "}
          {/* child route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
