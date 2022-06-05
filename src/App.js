import './App.css';
import NavBar from '../src/pages/shared/NavBar'
import Footer from './pages/shared/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
