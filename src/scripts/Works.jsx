import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from './ImageSlider.jsx';


export default function Works(){
    return(
        <div>
        <div className="gap-5 font-display works-container ">
        <Header></Header>
        <div className="mt-20 mr-10 works-container-intro ">
            <div id='mwdevices' className="mb-20 text-4xl rounded-lg works-container-MWDevices">
            <h2 className="px-24 mt-8 works-container-MWDevices-sect1">MW Devices</h2>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar  </p>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar rhoncus augue, vel elementum mi condimentum et. </p>
            <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider>
            </div>
            <div id='dev' className="text-4xl mb-20 rounded-lg works-container-MWDevices   bg-[#A1B296]">
            <h2 className="px-24 mt-8 works-container-MWDevices-sect1">Dev</h2>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar  </p>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar rhoncus augue, vel elementum mi condimentum et. </p>
            <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider>
        </div>
        <div id='design' className="text-4xl mb-20 rounded-lg works-container-MWDevices   bg-[#AF8497]">
            <h2 className="px-24 mt-8 works-container-MWDevices-sect1">Design</h2>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar  </p>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar rhoncus augue, vel elementum mi condimentum et. </p>
            <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider>
        </div>

        <div id='music' className="text-4xl mb-20 rounded-lg works-container-MWDevices   bg-[#B1C3C6]">
            <h2 className="px-24 mt-8 works-container-MWDevices-sect1">Music</h2>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar  </p>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum tristique mi at dignissim. In ac risus non nulla imperdiet molestie. Nulla ut augue id lectus sodales ultricies eget quis lectus. Vestibulum a leo nibh. Aliquam pulvinar, dolor a consectetur bibendum, eros sapien vehicula elit, in pharetra nisi magna eu leo. Integer fringilla ante aliquam orci commodo rhoncus. Suspendisse pulvinar rhoncus augue, vel elementum mi condimentum et. </p>
            <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider></div> 
        </div>
        <Footer></Footer>
        </div>
        </div>
    ) 
}