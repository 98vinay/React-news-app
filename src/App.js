import './App.css';
import Home from './containers/Home/home';
import {Routes,Route} from 'react-router-dom';
import DetailPage from './containers/DetailPage/detailPage';

function App() {
  return (
      <Routes>
          <Route path="/details" element={<DetailPage />} />
          <Route path="/" element={<Home /> }/>
      </Routes> 
  );
}

export default App;
