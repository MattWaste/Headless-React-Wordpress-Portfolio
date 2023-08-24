import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from './ImageSlider.jsx';


export default function Works(){
    return(
        <div className="gap-5 pl-14 font-display works-container ">
        <Header></Header>
        <div className="works-container-intro no-scrollbar">
            <div id='mwdevices' className="pl-20 text-4xl bg-yellow-400">MW Devices
            <p className= "mt-4 text-base center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar rhoncus augue, vel elementum mi condimentum et. Nam pretium, mi vitae consequat volutpat, enim ligula elementum odio, nec sodales nisi est non tortor. Vestibulum lacinia sit amet elit in semper. Aliquam enim risus, aliquam non nulla et, vulputate porttitor dui. Aenean sit amet hendrerit turpis. Curabitur vitae vehicula ipsum. </p>
            <ImageSlider marginLeft = "ml-10" marginTop ='mt-10' ></ImageSlider>
            </div>    
            <div id='dev' className=" .works-container-intro text-4xl">Dev</div>
            <div id='design' className=" .works-container-intro text-4xl">Design</div>
            <div id='music' className=".works-container-intro text-4xl">Music</div>
        </div>
        <Footer></Footer>
        </div>
    )
}