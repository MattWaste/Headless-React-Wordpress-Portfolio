import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Grass from './Grass'
// import Form from "./Form";
import ContactForm from "./ContactForm";

export default function Contact(){

    const[formData, setFormData] = React.useState(
        {email:"",subject:"",message:"",sendCopy:false}
        )
    console.log(formData);

    function handleChange(event){
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }

    return(
        <div className="gap-5 contact-container pl-14 font-display">
        <Header></Header>
        <Grass cssClass ='contact-container-grass' ></Grass>
        <h2 className="pb-16 mt-24 mr-20 text-4xl text-center contact-container-intro2">If you want to touch more grass, let me help. </h2>
        <div className="p-1 ml-16 mt-36 contact-container-intro">
            <h3 className="mt-20 mb-3 font-bold"> email</h3>
            <form>
                <input name="email" value={formData.email} onChange={handleChange} className='w-[402px] h-[43px]  mb-6  bg-zinc-300 rounded-[7px]'></input>
            <h3 className="mb-3 font-bold"> subject</h3>
                <input name="subject" value={formData.subject} onChange={handleChange} className=' pl-2 w-[402px] h-[43px]  mb-6 bg-zinc-300 rounded-[7px]'></input>
            <h3 className="mb-3 font-bold"> message</h3>    
            <textarea name = "message" value={formData.message} onChange={handleChange} id="message" className=' mb-3 pl-1 w-[402px] h-[86px]  bg-zinc-300 rounded-[7px]'></textarea>
            </form>
            <input className="mb-6" id='sendCopy' checked={formData.sendCopy} onChange={handleChange} type ='checkbox'></input>
            <label htmlFor="sendCopy"> Send yourself a copy</label>
            <div>
            <button className= " focus:outline-none bg-[#7DDA28] hover:bg-[#5A9D1B] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button">Send Message</button>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )}
