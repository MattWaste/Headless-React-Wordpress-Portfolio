import  React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from  "./HomePage.jsx";
import Contact from './Contact.jsx';
import About from './About.jsx';
import Works from './Works';
import { ApolloClient, ApolloProvider,InMemoryCache } from '@apollo/client';
import FormSubmission from './FormSubmission.jsx';
import Form from './Form.jsx';

const client = new ApolloClient({
  uri: 'https://mawtestsite.local/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
  
  <ApolloProvider client ={client}>
  <Routes>
    <Route  path="/" element={<HomePage/>}></Route>
    <Route  path="/contact" element={<Contact/>}></Route>   
    <Route  path="/about" element={<About/>}></Route>   
    <Route  path="/works" element={<Works/>}></Route>
    <Route path="/formsubmission" element={<FormSubmission/>}></Route>
  </Routes>
  </ApolloProvider>
)}

export default App
