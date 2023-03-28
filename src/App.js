import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Privacy from './pages/Privacy/Privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/privacy" element={<Privacy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
