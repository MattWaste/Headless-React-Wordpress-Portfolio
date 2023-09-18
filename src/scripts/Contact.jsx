import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Grass from './Grass'
// import Form from "./Form";
import ContactForm from "./ContactForm";

export default function Contact(){
    return(
        <div className="gap-5 contact-container pl-14 font-display">
        <Header></Header>
        <Grass cssClass ='contact-container-main2' w='w-[100px]' ></Grass>
        <h2 className="pl-1 mr-16 text-4xl contact-container-intro2">If you want to touch more grass let me help </h2>
        <div className="contact-container-intro">
            <h3 className="mt-20 mb-3 font-bold"> email</h3>
            <input id='email'  className='w-[402px] h-[43px]  mb-6  bg-zinc-300 rounded-[7px]'></input>
            <h3 className="mb-3 font-bold"> subject</h3>
            <input className=' pl-2 w-[402px] h-[43px]  mb-6 bg-zinc-300 rounded-[7px]'></input>
            <h3 className="mb-3 font-bold"> message</h3>
            <textarea id="message" className=' pl-1 mb-6 w-[402px] h-[86px]  bg-zinc-300 rounded-[7px]'></textarea>
        </div>
        <Footer></Footer>
        </div>
    )
}
<div className="w-[402px] h-[43px] bg-zinc-300 rounded-[7px]" /> 