import { Routes, Route } from "react-router-dom";
import Recruit from "../Pages/MainPage/recruit";
import Home from "../Pages/MainPage/home";
import Intern from "../Pages/MainPage/intern";
import ErrorPage from "../Pages/errorPage";
import LumiLife from "../Pages/MainPage/lumilife";
import Blog from "../Pages/MainPage/blog";

// Import detail component
import LearningLumiPage from "../Pages/DetailPage/LearningLumiPage";
export default function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/trangchu" element={<Home />} />
      </Route>
      <Route path="/thuctapsinh" element={<Intern />} />
      <Route path="/tuyendung" element={<Recruit />} />
      <Route path="/doisong" element={<LumiLife />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/blog/learning-with-lumi" element={<LearningLumiPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
