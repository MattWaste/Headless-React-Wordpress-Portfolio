import  {React, useEffect} from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from  "./HomePage.jsx";
import Contact from './Contact.jsx';
import About from './About.jsx';
import Works from './Works';
import FormSubmissions from './FormSubmissions.jsx';
import FormTest from './FormTest.jsx';
import { ApolloClient, ApolloProvider,InMemoryCache } from '@apollo/client';
// import {
//   GoogleReCaptchaProvider,
//   useGoogleReCaptcha
// } from 'react-google-recaptcha-v3';

// const CAPKEY = NODE_ENV_RECAPTCHA_KEY;
// console.log(CAPKEY);


// const YourReCaptchaComponent = () => {
//   const { executeRecaptcha } = useGoogleReCaptcha();

//   // Create an event handler so you can call the verification on button click event or form submit
//   const handleReCaptchaVerify = useCallback(async () => {
//     if (!executeRecaptcha) {
//       console.log('Execute recaptcha not yet available');
//       return;
//     }

//     const token = await executeRecaptcha('yourAction');
//     // Do whatever you want with the token
//   }, [executeRecaptcha]);

//   // You can use useEffect to trigger the verification as soon as the component being loaded
//   useEffect(() => {
//     handleReCaptchaVerify();
//   }, [handleReCaptchaVerify]);

//   return <button onClick={handleReCaptchaVerify}>Verify recaptcha</button>;
// };

const client = new ApolloClient({
  uri: 'https://mawtestsite.local/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
  // <GoogleReCaptchaProvider reCaptchaKey= {CAPKEY}>
  <ApolloProvider client ={client}>
  <Routes classname = 'font-staramedium'>
    <Route  path="/" element={<HomePage/>}></Route>
    <Route  path="/contact" element={<Contact/>}></Route>   
    <Route  path="/about" element={<About/>}></Route>   
    <Route  path="/works" element={<Works/>}></Route>
    <Route path="/formsubmission" element={<FormSubmissions/>}></Route>
    <Route path="/formtest" element= {<FormTest/>}></Route> 
  </Routes>
  </ApolloProvider>
  // </GoogleReCaptchaProvider>
)}

export default App


