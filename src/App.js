import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import "../src/index.css";
import About from "./pages/About";
import Business from "./pages/Business";
import Product from "./pages/Product";
import Relation from "./pages/Relation";
import { DataLinkBusiness } from "./Data";
import BusinessLayout from "./pages/BusinessLayout";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="business" element={<Business />}/>
          {DataLinkBusiness.map((item)=>(
            <Route path={"business/"+item.path} element={<BusinessLayout nama={item.nama} icon={item.icon} path={item.path} url={item.url} par1={item.par1} par2={item.par2} par3={item.par3} link={item.link}/>}/>
          ))}
          <Route path="product" element={<Product />} />
          <Route path="relation" element={<Relation />} />
          <Route path="contact" element={<Contact />}/>
        </Route>
        <Route path="/letter" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
