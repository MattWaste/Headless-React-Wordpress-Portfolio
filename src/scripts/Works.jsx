import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";


export default function Works(){
    return(
        <div className="pl-14 font-display works-container gap-5 ">
        <Header></Header>
        <div className="works-container-main no-scrollbar">
            <div id='mwdevices' className=" .works-container-intro text-4xl">MW Devices
            <p className="text-xl">Hi There</p>
            <ImageSlider className ='ml-4'></ImageSlider>
            </div>    
            <div id='dev' className=" .works-container-intro text-4xl">Dev</div>
            <div id='design' className=" .works-container-intro text-4xl">Design</div>
            <div id='music' className=".works-container-intro text-4xl">Music</div>
        </div>
        <Footer></Footer>
        </div>
    )
}