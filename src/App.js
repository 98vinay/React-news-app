import "./App.css";
import Home from "./containers/Home/home";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./containers/DetailPage/detailPage";
import ArticlesList from "./components/Articles/ArticlesList";
import Search from "./containers/Search/search";

function App() {
  return (
    <Routes>
      <Route path="/details" element={<DetailPage />} />
      <Route
        path="/articlesList/health"
        element={<ArticlesList articleName="health" />}
      />
      <Route
        path="/articlesList/business"
        element={<ArticlesList articleName="business" />}
      />
      <Route
        path="/articlesList/technology"
        element={<ArticlesList articleName="technology" />}
      />
      <Route
        path="/articlesList/sports"
        element={<ArticlesList articleName="sports" />}
      />
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
