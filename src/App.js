import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import '../src/index.css';
import About from './pages/About';
import Business from './pages/Business';
import Product from './pages/Product';
import Relation from './pages/Relation';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About />}/>
          <Route path='business' element={<Business />}/>
          <Route path='product' element={<Product />}/>
          <Route path='relation' element={<Relation />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
