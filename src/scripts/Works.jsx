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
        <div id='mwdevices' className=" text-4xl rounded-lg works-container-MWDevices bg-[#62878C]">
        <h2 className="px-24 mt--10 works-container-MWDevices-sect1">MW Devices</h2>
        <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect1">MW Devices is a Brooklyn based Music software and technology that seeks to make fellow musicians & creatives lives more lively. <br></br><br></br> Taking advantage of the flexible interfaces of Max and Max for Live, early tools like ‘Multi-Band Panner’ and Onlooker have seen four figure downloads since the company's inception in 2015.</p>
        <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect3">An ethos of ‘immediate and useful’ can be seen in all the tools that MW Devices develops. This can be seen in recent products, including ‘Shattered Delay’, released in late 2023. <br></br><br></br> 2024 will include an increased focus on emerging technologies, including and RNBO~ and embedded computing. Please get intouch for any collaborative ideas or work.
        </p>
        <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider>
    </div>
    <div id='dev' className="text-4xl rounded-lg works-container-MWDevices   bg-[#A1B296]">
        <h2 className="px-24 mt-8 works-container-MWDevices-sect1">Dev</h2>
        <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect1"> I currently work as a full stack web developer, able to combine my years working with physical computing and real-time DSP with modern web development frameworks and principles. <br></br><br></br> Current technology stack includes HTML,CSS, Javascript, React, Node, Git, Spline, RNBO, Max, M4L, GraphQL, Node, MongoDB, and more. 
        </p>
        <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect3">Upcoming web applications include the “Muse” songwriting companion, and custom interactive e-shops. <br></br><br></br> I love to collaborate and currently am taking on both short-term and long-term clients including team recruiting for any larger scale projects.
        </p>
        <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider>
    </div>
    <div id='design' className="text-4xl  rounded-lg works-container-MWDevices   bg-[#AF8497]">
        <h2 className="px-24 mt-8 works-container-MWDevices-sect1">Design</h2>
        <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect1">Having spent nearly a decade of my career focused on local and global engagement , I find a holistic vision for how to approach brand, design, and product necessary.<br></br><br></br> 
        Continuity amongst these core elements have led to a number of design and branding projects that have included the use of tools like Figma, Affinity Designer, Affinity Photo, Affinity Publisher, Miro, and Sketch.
        </p>
        <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect3">Managing the brand experience of regions that encompass 10’s of millions of people have encouraged me to think globally and act locally. 
       </p>
        <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider>
    </div>
        <div id='music' className="text-4xl  rounded-lg works-container-MWDevices   bg-[#B1C3C6]">
            <h2 className="px-24 mt-8 works-container-MWDevices-sect1">Music</h2>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect1">A cooler older sister and LA FM radio lead to my love of music, and my guiding light. I  have worked professionally in music production for over 10 years with experience writing, producing, and engineering. </p>
            <p className= "px-24 mt-24 text-xl center works-container-MWDevices-sect3">From micro-editing and vocal tuning, to sound design and songwriting, I am happy to collaborate in all parts of the sonic process. </p>
            <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider>
        </div> 
    </div>
    <Footer></Footer>
    </div>
</div>
) 
}