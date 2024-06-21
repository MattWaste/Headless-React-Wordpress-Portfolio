import {React, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";




export default function HomePage(){


    return(
        <div className="gap-5 pl-14 home-container bg blurg">
        <video className="py-40 pr-4 home-container-main2 video-container" src="http://mawtestsite.local/wp-content/uploads/2023/07/greenportal4.mp4"   autoPlay loop muted width="400px" height="300px" ></video>
        <Header className ='home-container-header'></Header>
        <div className="pt-[8rem] home-container-intro">
        <h3 className="py-5 text-2xl ">HELLO THERE</h3>
        <h2 className="py-3 text-7xl text-gradient font-poppinsmedium text-violet-700" >I'm Matt West</h2>
        <h2 className="py-3 text-3xl">  Creative technologist, developer & <br></br>  brand extoller</h2>
        <p className="py-3 text-xl "> I wear many hats both figuratively and literally. I code and design modern web applications, music tools, and a few things in-between. I've been involved in music production for 10+ years and love to champion the tools that help me each day.
        </p>
        <button className= "focus:outline-none txt-yellow-400 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" onClick= {()=>{window.location.href = 'http://mawtestsite.local/contact'}}>Work with me</button>
        </div>
        <Footer></Footer>
        </div>
    )
}



