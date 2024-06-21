import Header from "./Header";
import Footer from "./Footer";
import Grass from './Grass'
// import Form from "./Form";
import ReCAPTCHA from "react-google-recaptcha";
import {useMutation,gql} from '@apollo/client'
import React, { useState } from "react"






const CONTACT_MUTATION = gql`
    mutation CreateSubmissionMutation($clientMutationId: String!, $email: String!, $subject: String!, $message: String!, $send_copy: Boolean){
      createSubmission(input: {clientMutationId: $clientMutationId, email: $email, subject: $subject, message: $message, send_copy: $send_copy}) {
        data
        success
      }
    }`



export default function Contact(){
    

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


    return(
        <div className="gap-5 contact-container pl-14 font-display blurg">
        <Header className='contact-container-header'></Header>
        <h2 className="pb-16 mt-24 mr-20 text-4xl text-center contact-container-intro2">If you want to touch more grass, let me help. </h2>
        <Grass cssClass ='contact-container-grass' marginLeft = 'm-4'></Grass>
        <div className="p-1 ml-16 mt-36 contact-container-intro">
        <form onSubmit={handleSubmit}>
            <h3 className="mt-20 mb-3 font-bold"> email</h3>
            <input value={emailValue}  onChange={e => {setEmailValue(e.target.value)}}  
            className='w-[402px] pl-2 h-[43px]  mb-6  bg-zinc-300 rounded-[7px]'>   
            </input>
            <h3 className="mb-3 font-bold"> subject</h3>
                <input  value={subjectValue} onChange={e => {setSubjectValue(e.target.value)}}      
                className=' pl-2 w-[402px] h-[43px]  mb-6 bg-zinc-300 rounded-[7px]'>   
                </input>            
            <h3 className="mb-3 font-bold"> message</h3>    
            <textarea value={messageValue} onChange={e => {setMessageValue(e.target.value)}}  
             className=' mb-3 pl-1 w-[402px] h-[86px]  bg-zinc-300 rounded-[7px]'>  
             </textarea>            
          <div>
            <button className= " focus:outline-none bg-[#7DDA28] hover:bg-[#5A9D1B] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 " type="submit">Send Message
            </button>
            <div classname = 'recaptcha-container '>
            <ReCAPTCHA className="pt-10" sitekey="6Le5KMgpAAAAADoxanPdRux1g3ovy-lDIVM-MG_4" onChange={handleCaptchaChange}></ReCAPTCHA>
            </div>
          </div>  
        </form>
        </div>
        <Footer></Footer>
        </div>
    )}
