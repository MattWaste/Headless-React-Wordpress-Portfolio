import Header from "./Header";
import Footer from "./Footer";
import Grass from './Grass'
// import Form from "./Form";
import ReCAPTCHA from "react-google-recaptcha";
import {useMutation,gql} from '@apollo/client'
import React, { useState,useEffect } from "react"






const CONTACT_MUTATION = gql`
    mutation CreateSubmissionMutation($clientMutationId: String!, $email: String!, $subject: String!, $message: String!, $send_copy: Boolean){
      createSubmission(input: {clientMutationId: $clientMutationId, email: $email, subject: $subject, message: $message, send_copy: $send_copy}) {
        data
        success
      }
    }`



export default function Contact(){
    
  const [isSmallScreen, setisSmallScreen] = useState(window.innerWidth < 768);
  const [emailValue, setEmailValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const [sendCopyValue, setSendCopyValue] = useState(true)
  const [captchaValue, setCaptchaValue] = useState(null);


  const [CreateSubmissionMutation, { data, loading, error }] = useMutation(CONTACT_MUTATION);
   
  if (loading) return 'Submitting...';

  if (error) return `Submission error! ${error.message}`, console.log(error);



  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

  if( captchaValue ===null){
    return;
  }else {
    CreateSubmissionMutation({ variables: {      
      clientMutationId: 'example',
      email: emailValue ,
      send_copy: sendCopyValue,
      subject: subjectValue ,
      message: messageValue }});
  }
  }

useEffect(() => {
  // Define the function to handle resize
  const handleResize = () => {
    setisSmallScreen(window.innerWidth < 768);
  };

  // Call handleResize immediately to set the initial state
  handleResize();

  // Add event listener
  window.addEventListener('resize', handleResize);

  // Cleanup function to remove the event listener
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); // Empty dependency array means this effect runs only once on mount

    return(
        // <div className="gap-5 contact-container pl-14 font-display">
        // <Header className='contact-container-header'></Header>
        // <h2 className="pb-16 mt-24 mr-20 text-4xl text-center contact-container-intro2">If you want to touch more grass, let me help. </h2>
        // <Grass cssClass =' rounded-md contact-container-grass' marginLeft = 'm-4'></Grass>
        // <div className="p-1 ml-16 mt-36 contact-container-intro">
        // <form onSubmit={handleSubmit}>
        //     <h3 className="mt-20 mb-3 font-bold"> email</h3>
        //     <input value={emailValue}  onChange={e => {setEmailValue(e.target.value)}}  
        //     className='w-full p-2  h-full  mb-6  bg-zinc-300 rounded-[7px]'>   
        //     </input>
        //     <h3 className="mb-3 font-bold"> subject</h3>
        //         <input  value={subjectValue} onChange={e => {setSubjectValue(e.target.value)}}      
        //         className=' p-2 w-full h-full  mb-6 bg-zinc-300 rounded-[7px]'>   
        //         </input>            
        //     <h3 className="mb-3 font-bold"> message</h3>    
        //     <textarea value={messageValue} onChange={e => {setMessageValue(e.target.value)}}  
        //      className=' mb-3 w-full h-full pl-1 bg-zinc-300 rounded-[7px]'>  
        //      </textarea>            
        //   <div>
        //     <button className= " focus:outline-none bg-[#7DDA28] hover:bg-[#5A9D1B] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 " type="submit">Send Message
        //     </button>
        //     <div classname = ''>
        //     <ReCAPTCHA className="pt-10 " sitekey="6Le5KMgpAAAAADoxanPdRux1g3ovy-lDIVM-MG_4" onChange={handleCaptchaChange}></ReCAPTCHA>
        //     </div>
        //   </div>  
        // </form>
        // </div>
        // <Footer></Footer>
        // </div>

        <div className='main-container'>
        <Header></Header>
        <h2 className="px-24 text-4xl text-center pt-52 sm:px-12 sm:pt-28 ">If you want to touch more grass, let me help. </h2>
        <div className="px-24 sm:px-12 contact-container grow">
              <div className="">
                <form className="p-1 mr-16 sm:mr-6" onSubmit={handleSubmit}>
                  <h3 className="mt-20 mb-3 font-bold sm:text-center"> email</h3>
                  <input value={emailValue}  onChange={e => {setEmailValue(e.target.value)}} maxLength={100} 
                  className='w-full p-2 h-full  mb-6  bg-zinc-300 rounded-[7px]'>   
                  </input>
                  <h3 className="mb-3 font-bold sm:text-center"> subject</h3>
                  <input  value={subjectValue} onChange={e => {setSubjectValue(e.target.value)}} maxLength={100}     
                  className=' p-2 w-full h-full  mb-6 bg-zinc-300 rounded-[7px]'>   
                  </input>            
                  <h3 className="mb-3 font-bold text-black sm:text-center"> message</h3>    
                  <textarea value={messageValue} onChange={e => {setMessageValue(e.target.value)}} maxLength={2000} 
                  className=' mb-3 w-full h-full pl-1 bg-zinc-300 rounded-[7px]'>  
                  </textarea>
                  <div className="sm:flex sm:justify-center">          
                  <button className= " focus:outline-none bg-[#7DDA28] hover:bg-[#5A9D1B] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 " type="submit">Send Message
                  </button>
                  </div>
                  <ReCAPTCHA
                  key={isSmallScreen ? "compact" : "normal"} 
                  className="pt-10 sm:flex sm:justify-center" sitekey="6Le5KMgpAAAAADoxanPdRux1g3ovy-lDIVM-MG_4" 
                  size={isSmallScreen ? "compact" : "normal"} 
                  onChange={handleCaptchaChange}>    
                  </ReCAPTCHA>
                </form>
              </div>
              <div className="my-10 sm:my-4 sm:pr-4">
              <Grass cssClass =' overflow-clip  cursor-pointer max-h-[600px] min-h-[200px] h-4/5 rounded-md'></Grass>   
              </div>
        </div>
        <Footer></Footer>
        </div>
    )}
