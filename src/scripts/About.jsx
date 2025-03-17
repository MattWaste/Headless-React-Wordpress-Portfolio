import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About(){
    return(
<div className="main-container">
<Header></Header>
    <div className="px-24 sm:px-12 sm:text-center sm:pt-28 place-items-center about-container grow">
        <div className="">
            <p className="text-xl sm:pt-0">
            <span className="text-5xl text-gradient font-poppinsmedium">Matt West</span> is a lifelong learner, a maker of digital imprints, and a designer of experiences. His work in web/app development and music technology has garnered thousands of users since 2015.  
            <br></br><br></br>
            With over nine years at Ableton as a brand manager, product specialist, and marketer, Matt has seen the power of building strong communities and telling stories worth sharing.
            He continues to make and produce music in a number of capacities. You can currently find Matt in Brooklyn, New York— Likely in his studio or on his bike.
            </p>
        </div>
        <div className="">    
        <img className="max-h-[550px] min-h-[400px]" src="https://mattewest.com/wp-content/uploads/2024/07/Mosaic-transparent@2x.png"></img>
        </div>
    </div>  
<Footer></Footer>
</div>

    )
}
