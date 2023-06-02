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
import { DataID } from "./Data";
import { DataEnglish } from "./DataEnglish";
import RelationLayout from "./pages/RelationLayout";

import { useState ,useEffect} from "react";
function App() {
  const [lang,setLang]=useState('id')
  const [data,setData]=useState(DataID)  
  const language=[DataID,DataEnglish]
  useEffect(()=>{
    if (lang==='id'){
      setData(language[0])
    }else{
      setData(language[1])
    }
  },[])
  
  function handleLangChange(e){
    if (lang==='en'){
      setLang('id')
      setData(language[0])
    } else{
      setLang('en')
      setData(language[1])
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout lang={lang} handleLang={handleLangChange}/>}>
          <Route index element={<Home data={data} lang={lang}/>} />
          <Route path="about" element={<About data={data} lang={lang}/>} />
          <Route path="business" element={<Business data={data} lang={lang}/>}/>
          {data.linkBusiness.map((item)=>(
            <Route path={"business/"+item.path} element={<BusinessLayout lang={lang} nama={item.nama} icon={item.icon} path={item.path} url={item.url} par1={item.par1} par2={item.par2} par3={item.par3} link={item.link}/>}/>
          ))}
          <Route path="product" element={<Product data={data} lang={lang} />} />
          <Route path="relation" element={<Relation data={data} lang={lang} />} />
          {data.relation.map((item)=>(
            <Route path={"relation/"+item.path} element={<RelationLayout lang={lang} nama={item.nama} path={item.path} file={item.file} />}/>
          ))}
          <Route path="contact" element={<Contact data={data} lang={lang} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
