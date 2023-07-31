import { React} from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from  "./HomePage.jsx";
import Contact from './Contact.jsx';
import About from './About.jsx';
import Works from './Works';

function App() {
  return (
  <div>
  <Routes>
    <Route  path="/" element={<HomePage/>}></Route>
    <Route  path="/contact" element={<Contact/>}></Route>   
    <Route  path="/about" element={<About/>}></Route>   
    <Route  path="/Works" element={<Works/>}></Route>   
  </Routes>
   </div>
)}

export default App