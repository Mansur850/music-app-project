
import "./assets/css/style.css";
import HomePage from "./assets/pages/HomePages";
import Footer from "./components/Footer";
import PostDeatailPage from "./assets/pages/PostDetailPage";
import CategoriesPage from "./assets/pages/CategoriesPage";
import PostsByCategoriesPage from "./assets/pages/PostsByCategoriesPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Footer />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Post/:id" element={<PostDeatailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/posts/:id" element={<PostsByCategoriesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;