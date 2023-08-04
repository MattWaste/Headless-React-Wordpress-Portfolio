import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Works(){
    return(
        <div className="pl-14 font-display works-container gap-5 ">
        <Header></Header>
        <div className="works-container-main">
            <div className=" .home-container-intro text-4xl">MW Devices</div>
            <div className=" .home-container-intro text-4xl">Dev</div>
            <div className=" .home-container-intro text-4xl">Design</div>
            <div id='music' className=".home-container-intro text-4xl">Music</div>
        </div>
        <Footer></Footer>
        </div>
    )
}