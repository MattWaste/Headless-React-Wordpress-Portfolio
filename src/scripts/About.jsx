import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About(){
    return(
        <div className="gap-5 pl-14 font-display about-container blurg ">
        <Header className = 'about-container-header' ></Header>
        <div className="pl-4 w-[400px] h-[600px] mt-28 about-container-main2">
            <img src="http://mawtestsite.local/wp-content/uploads/2023/07/Mosaic-transparent@2x.png"></img>
        </div>
        <div className='pt-[12rem] about-container-intro '>
            <p className="text-xl">
            <span className="text-5xl text-green font-poppinsmedium">Matt West</span> is a life-long learner, a maker of digital imprints, and a designer of things. His work in music technology and web/app development have garnered thousands of users since 2015. Recent 
            highlights include the release of the 'Shattered Delay' Audio Effect and the upcoming 'Muse' web app. <br></br><br></br>
             He has worked at Ableton for over 9 years as a Brand Manager and product specalist and continues to make and produce music in a number of capacities. You can currently find Matt in Brooklyn New York, likely in his studio or on his bike.
            </p>
        </div>
        <Footer></Footer>
        </div>
    )
}





