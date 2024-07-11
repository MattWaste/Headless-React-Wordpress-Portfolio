import {React, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";




export default function HomePage(){


    return(
        <div className='main-container'>
        <Header></Header>
        <div className="px-24 pt-52 sm:self-center sm:px-6 sm:pt-28 home-container-new grow">
            <div>
                <h3 className="py-5 text-2xl sm:py-0 sm:text-center ">HELLO THERE</h3>
                <h2 className="py-3 sm:text-center sm:text-5xl text-7xl text-gradient font-poppinsmedium" >I'm Matt West</h2>
                <h2 className="py-3 text-3xl sm:text-center sm:textl-2xl">  Creative technologist, developer & <br></br>  brand extoller</h2>
                <p className="py-3 text-xl sm:text-center "> I wear many hats both figuratively and literally. I code and design modern web applications, music tools, and a few things in-between. I've been involved in music production for 10+ years and love to champion the tools that help me each day.
                </p>
                <div className="flex sm:justify-center">
                <button className= "focus:outline-none txt-yellow-400 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" onClick= {()=>{window.location.href = 'https://mattewest.com/contact'}}>Work with me</button>
                </div>
            </div>
            <div className="pt-8">
                <video  className="video-container min-h-[250px] min-w-[250px]" src="https://mattewest.com/wp-content/uploads/2023/07/greenportal4.mp4" playsInline autoPlay loop muted width="400px" height="400px" ></video>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}

/* 
    <div className=''>
    <h3 className="py-5 text-2xl ">HELLO THERE</h3>
        <h2 className="py-3 text-7xl text-gradient font-poppinsmedium text-violet-700" >I'm Matt West</h2>
        <h2 className="py-3 text-3xl">  Creative technologist, developer & <br></br>  brand extoller</h2>
        <p className="py-3 text-xl "> I wear many hats both figuratively and literally. I code and design modern web applications, music tools, and a few things in-between. I've been involved in music production for 10+ years and love to champion the tools that help me each day.
        </p>
    </div>





*/