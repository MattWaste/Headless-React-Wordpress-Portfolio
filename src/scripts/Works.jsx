import React, {useEffect}  from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from './ImageSlider.jsx';
import AudioPlayer from './AudioPlayer.jsx';


/*

bg mw devices = rgb(137,215,130)

bg dev = rgb(161,178,150) orig

bg design = rgb(175,132,151) orig

bg music = rgb(177,195,198) orig

*/






export default function Works(){

  useEffect(() => {
    const handleScroll = () => {
      var header = document.getElementById('staticHeader');
      var scrollPosition = window.scrollY > 8;
      if (scrollPosition) {
        header.style.backdropFilter = 'blur(150px)';
      } else {
        header.style.backdropFilter = 'blur(0px)';
      }

      // var blur = document.getElementById('works')
      // if (window.scrollY > 20) {
      //   blur.style.height = '80vh';
      // } else {
      //   blur.style.height = '100vh'; // reset to initial value when not scrolled
      // }
    }

    window.addEventListener('scroll', handleScroll); 
    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
    return(
<div className="">
<Header id = 'staticHeader' className = 'staticHeader.blur'></Header>
    <div className="h-full font-display works-container blurg ">
    <div className=" works-container-intro">
        <div id = 'works' className="content-start text-4xl works-container-MWDevices">
            <img className="w-[800px] h-[400px] works-container-MWDevices-sect2 " src="http://mawtestsite.local/wp-content/uploads/2024/04/logo_Platform_Export_12_4_20.svg" alt="Logo" />
            <p className= "content-end mb-[100px] text-2xl text-center works-container-MWDevices-sect2">See what I do </p>
            <div className="animate-bounce content-end mt-[110px] works-container-MWDevices-sect2" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mx-auto">
            <path strokeLinecap="square" strokeLinejoin="bevel" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            </div>       
        </div>
        <div id='mwdevices' className=" text-2xl works-container-MWDevices bg-[rgb(137,215,130)]">
            <h2 className="pl-24 text-5xl mt-28 font-poppinsmedium works-container-MWDevices-sect1">MW Devices</h2>
            <p className= "pl-24 mt-48 text-3xl -mr-28 works-container-MWDevices-sect1">Is a Brooklyn based music software and technology that seeks to make fellow musicians & creatives lives more lively. </p>
            <p className="pl-8 pr-24 works-container-MWDevices-sect3 mt-[34REM]"> Tools like ‘Multi-Band Panner’ and 'Onlooker' have seen four figure downloads since the company's inception in 2015.</p>
            <p className="works-container-MWDevices-sect2 mt-[60REM] pr-24 ">
            2024 will include an increased focus on emerging technologies, including Gen~, RNBO, & embedded computing.
            </p> 
            <p className="pl-8 pr-24 mt-[77REM] works-container-MWDevices-sect3 ">
              Recent collaborations inlcude working with Ableton on the 'Building Max Devices' Pack for Live 12.
            </p> 
            <video autoPlay loop muted className="rounded-md mt-96 works-container-MWDevices-sect2"  src='http://mawtestsite.local/wp-content/uploads/2024/05/Screen-Recording-2024-05-21-at-5.56.35 PM-1.mov'></video>
            <img className="works-container-MWDevices-sect1 pl-14  mt-[54REM]" src= 'http://mawtestsite.local/wp-content/uploads/2024/05/Screen-Shot-2020-05-29-at-8.24.37-PM-1.png'></img>
            <img className="works-container-MWDevices-sect2 mt-[76REM]" src= 'http://mawtestsite.local/wp-content/uploads/2024/05/Screenshot-2024-05-22-at-10.21.50 AM.png'></img>
            {/* <ImageSlider cssClass = 'works-container-MWDevices-sect2' marginLeft = "ml-10" marginTop ='mt-48' ></ImageSlider> */}
        </div>


        <div className="h-auto">
        <h2 className="px-24 py-24  bg-[#82b3d7] pt-28 text-5xl font-poppinsmedium">Development</h2>            
        <div id='dev' className="text-2xl  pl-24 pr-24 pb-24 works-container-Dev   bg-[#82b3d7]">
          <img className ='object-cover w-4/5 works-container-Dev-sect1 h-3/5' src ='http://mawtestsite.local/wp-content/uploads/2024/05/website_work_coding.png'></img>
          <h3 className="self-end pb-48 text-3xl font-staraBold works-container-Dev-sect1">Modern Code</h3>
          <p className="self-end pb-20 pr-10 text-xl text-balance works-container-Dev-sect1"> In rhoncus velit nisl, mollis ultrices diam porta eu. Morbi vitae eleifend nibh. Mauris eget mattis magna. Suspendisse finibus nisl a fringilla blandit.  </p>
          <img className ='object-contain w-4/5 h-3/5 works-container-Dev-sect2 ' src ='http://mawtestsite.local/wp-content/uploads/2024/05/webstack_composite.png'></img>
          <h3 className="self-end pb-48 text-3xl font-staraBold works-container-Dev-sect2">Wide Stack</h3>
          <p className="self-end pb-20 pr-10 text-xl works-container-Dev-sect2"> In rhoncus velit nisl, mollis ultrices diam porta eu. Morbi vitae eleifend nibh. Mauris eget mattis magna. Suspendisse finibus nisl a fringilla blandit. </p>
          <img className ='object-cover w-4/5 h-3/5 works works-container-Dev-sect3' src ='http://mawtestsite.local/wp-content/uploads/2024/05/ai_training_model_1.png'></img>
          <h3 className="self-end pb-48 text-3xl font-staraBold works-container-Dev-sect3">New Tech</h3>
          <p className="self-end pb-20 pr-10 text-xl works-container-Dev-sect3">  In rhoncus velit nisl, mollis ultrices diam porta eu. Morbi vitae eleifend nibh. Mauris eget mattis magna. Suspendisse finibus nisl a fringilla blandit. </p>
          <img className ='object-cover w-4/5 h-3/5 works-container-Dev-sect4' src ='http://mawtestsite.local/wp-content/uploads/2024/05/raspberry_pi_push3.jpeg'></img>
          <h3 className="self-end pb-48 text-3xl font-staraBold works-container-Dev-sect4"> Embedded Compute</h3>
          <p className="self-end pb-20 pr-10 text-xl works-container-Dev-sect4"> In rhoncus velit nisl, mollis ultrices diam porta eu. Morbi vitae eleifend nibh. Mauris eget mattis magna. Suspendisse finibus nisl a fringilla blandit.  </p>
        </div>
        </div>
        
        <div className="h-auto">
        <h2 className="px-24 py-24  bg-[#d7a582]  pt-28 text-5xl font-poppinsmedium">Brand & Design</h2>            
        <div id='design' className="text-4xl px-24   works-container-Design bg-[#d7a582]">
          <video className="p-8 works-container-Design-sect1" autoPlay loop muted  src= 'http://mawtestsite.local/wp-content/uploads/2024/05/brand_excercise_compressed.mov'></video>
          <h3 className="pl-8 text-3xl pt-[28REM] font-staraBold works-container-Design-sect1">Brand</h3>
          <p className = 'p-8 text-xl pt-[33REM] works-container-Design-sect1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius maximus ipsum, non tincidunt quam. Donec pretium sem nisl, quis vehicula nisi sollicitudin cursus. Vivamus feugiat mauris nec lectus semper finibus sit amet ac risus. Nullam ac turpis a purus aliquet eleifend. In porta tristique arcu, a egestas dolor mattis non. Vivamus malesuada risus nec purus ultricies dictum.r</p>

          <img className ='p-8 works-container-Design-sect2' src ='http://mawtestsite.local/wp-content/uploads/2024/05/design_books_new.jpg'></img>
          <h3 className="pl-8 text-3xl pt-[28REM] font-staraBold works-container-Design-sect2">Research</h3>
          <p className = 'p-8 text-xl pt-[33REM] works-container-Design-sect2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius maximus ipsum, non tincidunt quam. Donec pretium sem nisl, quis vehicula nisi sollicitudin cursus. Vivamus feugiat mauris nec lectus semper finibus sit amet ac risus. Nullam ac turpis a purus aliquet eleifend. In porta tristique arcu, a egestas dolor mattis non. Vivamus malesuada risus nec purus ultricies dictum.</p>

          <img className ='p-8 works-container-Design-sect3' src ='http://mawtestsite.local/wp-content/uploads/2024/05/Figma_delay_creation.png'></img>
          <h3 className="pl-8 text-3xl pt-[28REM] font-staraBold works-container-Design-sect3">Design</h3>
          <p className = 'p-8 text-xl pt-[33REM] works-container-Design-sect3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius maximus ipsum, non tincidunt quam. Donec pretium sem nisl, quis vehicula nisi sollicitudin cursus. Vivamus feugiat mauris nec lectus semper finibus sit amet ac risus. Nullam ac turpis a purus aliquet eleifend. In porta tristique arcu, a egestas dolor mattis non. Vivamus malesuada risus nec purus ultricies dictum.</p>
        </div>
    
         
      <div className="h-auto">
        <h2 className="px-24 py-24  bg-[#d78289] pt-28 text-5xl font-poppinsmedium">Music</h2>
        <div id='music' className="text-4xl works-container-Music bg-[#d78289]">    
          <div className ='px-24 h-36 works-container-Music-sect1'>
            <img className = 'pb-10' src = 'http://mawtestsite.local/wp-content/uploads/2024/05/IMG_2631_small.jpg'></img>
            <AudioPlayer url = 'http://mawtestsite.local/wp-content/uploads/2024/05/Chordal-Reasons-4_16_24.mp3'></AudioPlayer>
            <AudioPlayer url = 'http://mawtestsite.local/wp-content/uploads/2024/05/Chordal-Reasons-4_16_24.mp3'></AudioPlayer>
          </div>
          <div className="className ='px-24 pb-10 text-xl h-36 works-container-Music-sect2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius maximus ipsum, non tincidunt quam. Donec pretium sem nisl, quis vehicula nisi sollicitudin cursus. Vivamus feugiat mauris nec lectus semper finibus sit amet ac risus. Nullam ac turpis a purus aliquet eleifend. In porta tristique arcu, a egestas dolor mattis non. Vivamus malesuada risus nec purus ultricies dictum.
          <AudioPlayer url = 'http://mawtestsite.local/wp-content/uploads/2024/05/Chordal-Reasons-4_16_24.mp3'></AudioPlayer>
          <AudioPlayer url = 'http://mawtestsite.local/wp-content/uploads/2024/05/Chordal-Reasons-4_16_24.mp3'></AudioPlayer>

          </div>
        </div> 
      </div>
      </div>
    </div>
    {/* <Footer id ='worksFooter'></Footer>         */}
    </div>
</div>
) 
}