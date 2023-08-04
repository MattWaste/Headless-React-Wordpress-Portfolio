import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About(){
    return(
        <div className="pl-14 font-display about-container gap-5  ">
        <Header></Header>
        <div className="about-container-header w-4/5 py-32    mt-10">
            <img src="http://mawtestsite.local/wp-content/uploads/2023/07/Mosaic-transparent@2x.png"></img>
        </div>
        <div className='about-container-intro py-80 px-10'>
            <p>
            <span className="text-4xl">Matt West</span> is a life-long learner, a maker of digital imprints, and a designer of things. His work in music technology and web/app development have garnered thousands of users since 2015. Recent 
            highlights include the release of the 'Shattered Delay' Audio Effect and the upcoming 'Muse' web app. <br></br><br></br>
             He has worked at Ableton for over 8 years as a Brand Manager and product specalist and continues to make and produce music in a number of capacities. You can currently find Matt in Brooklyn New York, likely in his studio or on his bike.
            </p>
        </div>
        <Footer className="bg-slate-100"></Footer>
        </div>
    )
}





