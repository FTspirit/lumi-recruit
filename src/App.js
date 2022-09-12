import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trangchu from "./Pages/trangchu";
import Tuyendung from "./Pages/tuyendung";
import Doisong from "./Pages/doisong";
import Blog from "./Pages/blog";
import ErrorPage from "./Pages/errorPage";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/tuyendung" element={<Tuyendung />} />
        <Route path="/doisong" element={<Doisong />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
