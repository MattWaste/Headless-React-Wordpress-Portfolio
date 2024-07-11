import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About(){
    return(
<div className="main-container">
<Header></Header>
    <div className="px-24 sm:px-12 sm:pt-28 place-items-center about-container grow">
        <div className="">
            <p className="text-xl sm:pt-0">
            <span className="text-5xl text-gradient font-poppinsmedium">Matt West</span> is a life-long learner, a maker of digital imprints, and a designer of things. His work in web/app development and music technology have garnered thousands of users since 2015. Recent highlights include the release of the 'Shattered Delay' audio effect and the upcoming 'Muse' web app. 
            <br></br><br></br>
            He has worked at Ableton for over 9 years as a Brand Manager and product specalist and continues to make and produce music in a number of capacities. You can currently find Matt in Brooklyn, New York— Likely in his studio or on his bike.
            </p>
        </div>
        <div className="">    
        <img className="max-h-[450px] min-h-[350px]" src="https://mattewest.com/wp-content/uploads/2024/07/Mosaic-transparent@2x.png"></img>
        </div>
    </div>  
<Footer></Footer>
</div>

    )
}
