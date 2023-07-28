import React from "react";
import Header from "./Header";
import Footer from "./Footer";


export default function HomePage(){
    return(
        <div className="pl-10 font-display home-container gap-5 ">
        <video className="py-28 mr-5 home-container-header video-container" src="http://mawtestsite.local/wp-content/uploads/2023/07/greenportal4.mp4"   autoPlay loop muted width="400px" height="300px" ></video>
        <Header></Header>
        <img src=""></img>
        <div className="home-container-intro py-36">
        <h3 className="py-5">HELLO THERE</h3>
        <h1 className="text-4xl py-3">I'm Matt West</h1>
        <h2 className="text-2xl py-3">  Creative technologist, developer, and brand extoller</h2>
        <p className="py-3"> I wear many hats both figuratively and literally. I code and design modern web applications, music tools, and a few things in-between. I've been involved in music production for 10+ years and love to champion the tools that help me each day.
        </p>
        <button className= "focus:outline-none txt-yellow-400 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button">Work with me</button>
        </div>
        <Footer></Footer>
        </div>
    )
}



