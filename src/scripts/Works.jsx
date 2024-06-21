import React, {useState, useEffect}  from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from './ImageSlider.jsx';
import AudioPlayer from './AudioPlayer.jsx';


/*

bg main: rgb(114, 140, 98)

bg mw devices = rgb(137,215,130)

bg dev = rgb(119,170,209) 

bg design = rgb(215,165,130) 

bg music = rgb(215,130,137) 

*/


export default function Works(){

  const [backgroundColor, setBackgroundColor] = useState('rgb(137,215,130)');
  const [lastScrollTop, setLastScrollTop] = useState(0);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    });

    document.querySelectorAll('.textTransition').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


useEffect(() => {
  // Existing code for text transitions...

  // New code for image motion graphic
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing the element after adding 'visible' class
        observer.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('.motion-image').forEach((img) => {
    imageObserver.observe(img);
  });
  
  // Cleanup function to unobserve images
  return () => {
    document.querySelectorAll('.motion-image').forEach((img) => {
      imageObserver.unobserve(img);
    });
  };
}, []);




  useEffect(() => {
    const colors = [
      {r: 137, g: 215, b: 130}, // devices
      {r: 119, g: 170, b: 209}, // dev
      {r: 215, g: 165, b: 130}, // design
      {r: 215, g: 130 , b: 137} // music 
    ];

    const handleScroll = () => {
      var scrollPosition = window.scrollY;

      // Get the distance of each header from the top of the viewport
      var header1Top = document.getElementById('mwdevices').getBoundingClientRect().top;
      var header2Top = document.getElementById('dev').getBoundingClientRect().top;
      var header3Top = document.getElementById('design').getBoundingClientRect().top;
      var header4Top = document.getElementById('music').getBoundingClientRect().top;

      // Determine which header is currently at the top of the viewport
      var currentHeader;
      if (header1Top <= 0 && header2Top > 0) {
        currentHeader = 0;
      } else if (header2Top <= 0 && header3Top > 0) {
        currentHeader = 1;
      } else if (header3Top <= 0 && header4Top > 0) {
        currentHeader = 2;
      } else if (header4Top <= 0) {
        currentHeader = 3;
      }

      // Determine scroll direction
      // Determine scroll direction
var scrollDirection = scrollPosition > lastScrollTop ? 1 : -1;
setLastScrollTop(scrollPosition);

// Adjust colorPercentage based on the distance of the next header from the top of the viewport
var colorPercentage;
var nextHeaderId;
nextHeaderId = ['mwdevices', 'dev', 'design', 'music'][currentHeader + 1];
colorPercentage = 1 - document.getElementById(nextHeaderId).getBoundingClientRect().top / window.innerHeight;

// Clamp colorPercentage between 0 and 1
colorPercentage = Math.max(0, Math.min(1, colorPercentage));

var startColor = colors[currentHeader];
var endColor = colors[currentHeader + 1];

var r = startColor.r + colorPercentage * (endColor.r - startColor.r);
var g = startColor.g + colorPercentage * (endColor.g - startColor.g);
var b = startColor.b + colorPercentage * (endColor.b - startColor.b);


setBackgroundColor('rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')');
    }

    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollTop]); // Add lastScrollTop to dependency array

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
<div>
<Header id = 'staticHeader' className = 'staticHeader.blur'></Header>
    <div className="h-full font-display works-container blurg ">
    <div className=" works-container-intro">
        <div id = 'works' className="content-start text-4xl works-container-logo">
            <img className="w-[800px] h-[400px] works-container-logo-sect2 " src="http://mawtestsite.local/wp-content/uploads/2024/04/logo_Platform_Export_12_4_20.svg" alt="Logo" />
            <p className= "content-end mb-[100px] text-2xl text-center works-container-logo-sect2">See what I do </p>
            <div className="animate-bounce content-end mt-[110px] works-container-logo-sect2" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mx-auto">
            <path strokeLinecap="square" strokeLinejoin="bevel" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            </div>       
        </div>
 
      <h2 id='mwdevices' style={{backgroundColor: backgroundColor}} className="px-24 text-7xl py-24 font-poppinsmedium">
      <span className="textTransition">MW Devices</span>
      </h2>
      <section>
      <div style={{backgroundColor: backgroundColor}} className=" gap-10  px-48 pb-14 place-items-center works-container-MWDevicesA">
        <video autoPlay loop muted className="col-span-1 rounded-md" src='http://mawtestsite.local/wp-content/uploads/2024/05/Screen-Recording-2024-05-21-at-5.56.35 PM-1.mov'></video>
        <p className="col-span-1 text-2xl text-center ">MW Devices Is a Brooklyn based music software and technology company that seeks to make fellow musicians and creatives lives more lively. Tools like ‘Multi-Band Panner’, 'Onlooker', and 'Shattered Delay' have seen four figure downloads since the company's inception in 2015.</p>
      </div>
      <div style={{backgroundColor: backgroundColor}} className="gap-10 pb-24 px-24 works-container-MWDevicesB">
          <div>
            <img className="object-cover motion-image w-full mb-10 h-36" src= 'http://mawtestsite.local/wp-content/uploads/2024/05/Screenshot-2024-05-22-at-10.21.50 AM.png'></img>
            <h3 className="pb-5 text-3xl font-staraBold ">Collaborators</h3>
            <p className="text-xl">Recent collaborations inlcude working with Ableton on the 'Building Max Devices' Pack for Live 12. Here is an included XY controller device I made with the support of the  Max for Live Team, taking advantage of Javascript and Max.</p>
          </div>
          <div>
            <img className="object-cover motion-image w-full mb-10 h-36" src= 'http://mawtestsite.local/wp-content/uploads/2024/06/gen_slice.png'></img>
            <h3 className="pb-5 text-3xl font-staraBold">New Frontiers</h3>
            <p className="text-xl "> 2024 will include an increased focus on emerging technologies, including Gen~, RNBO, and embedded computing. Please get intouch for any collaborative ideas or work. </p>
          </div>
      </div>
      </section>



        {/* <div id='mwdevices' className=" px-24 text-2xl works-container-MWDevices bg-[rgb(137,215,130)]">
            <video autoPlay loop muted className="w-2/3 overflow-hidden align-top rounded-md h-2/3 justify-self-center works-container-MWDevices-sect1"  src='http://mawtestsite.local/wp-content/uploads/2024/05/Screen-Recording-2024-05-21-at-5.56.35 PM-1.mov'></video>
            <p className=" w-2/3 pt-[43REM] text-center justify-self-center works-container-MWDevices-sect1"> MW Devices Is a Brooklyn based music software and technology company that seeks to make fellow musicians and creatives lives more lively. Tools like ‘Multi-Band Panner’, 'Onlooker', and 'Shattered Delay' have seen four figure downloads since the company's inception in 2015.
            </p>
            <img className="box-border w-3/4 overflow-hidden align-top rounded-lg h-1/4 works-container-MWDevices-sect3" src= 'http://mawtestsite.local/wp-content/uploads/2024/05/Screenshot-2024-05-22-at-10.21.50 AM.png'></img>
            <h3 className="pt-48 text-3xl font-staraBold works-container-MWDevices-sect3">Collaborators</h3>
            <p className="w-3/4 pt-64 text-xl text-balance works-container-MWDevices-sect3"> Recent collaborations inlcude working with Ableton on the 'Building Max Devices' Pack for Live 12. Here is an included XY controller device I made with the support of the  Max for Live Team, taking advantage of Javascript and Max.</p>
          
            <img className="box-border w-3/4 rounded-md h-1/4 works-container-MWDevices-sect4" src= 'http://mawtestsite.local/wp-content/uploads/2024/06/gen_slice.png'></img>
            <h3 className="pt-48 text-3xl font-staraBold works-container-MWDevices-sect4">New Frontiers</h3>
            <p className="w-3/4 pt-64 pr-16 text-xl text-balance works-container-MWDevices-sect4">2024 will include an increased focus on emerging technologies, including Gen~, RNBO, and embedded computing. Please get intouch for any collaborative ideas or work. </p>
        </div> */}
        {/* <div id='dev' className="text-2xl  pl-24 pr-24 pb-24 works-container-Dev   bg-[#82b3d7]">
          <img className ='object-cover w-4/5 works-container-Dev-sect1 h-3/5' src ='http://mawtestsite.local/wp-content/uploads/2024/05/website_work_coding.png'></img>
          <h3 className="text-3xl pt-[32REM] font-staraBold works-container-Dev-sect1">Modern Code</h3>
          <p className="pt-[35REM] pr-10 text-xl text-balance works-container-Dev-sect1"> I work as a full-stack engineer fluent in coding principles and the latest technology. My biggest attribute however, is my willingness to learn. Here is an example of modern react being used to conditionally render the header you see above! </p>
          <img className ='object-contain w-4/5 h-3/5 works-container-Dev-sect2 ' src ='http://mawtestsite.local/wp-content/uploads/2024/05/webstack_composite.png'></img>
          <h3 className="pt-[32REM] text-3xl font-staraBold works-container-Dev-sect2">Wide Stack</h3>
          <p className="pt-[35REM] pr-10 text-xl works-container-Dev-sect2"> My current technology stack includes HTML,CSS, Javascript, Python, React, Node, Conda, Git, Spline, RNBO, Max, M4L, GraphQL, MongoDB Express, and more.</p>
          <img className ='object-cover w-4/5 h-3/5 works-container-Dev-sect3' src ='http://mawtestsite.local/wp-content/uploads/2024/05/ai_training_model_1.png'></img>
          <h3 className="pt-[32REM] text-3xl font-staraBold works-container-Dev-sect3">New Tech</h3>
          <p className="pt-[35REM] pr-10 text-xl works-container-Dev-sect3">  AI has proven one of the most exciting new technologies, and it would be a mistake to avoid taking advantage of it. I have been exploring AI (and subsets like ML, MIR, NLP). Here is an example of a locally configured voice cloning model that I trained on myself. 
          </p>
          <img className ='object-cover w-4/5 h-3/5 works-container-Dev-sect4' src ='http://mawtestsite.local/wp-content/uploads/2024/05/raspberry_pi_push3.jpeg'></img>
          <h3 className="pt-[32REM] text-3xl font-staraBold works-container-Dev-sect4"> Embedded Compute</h3>
          <p className="pt-[35REM] pr-10 text-xl works-container-Dev-sect4"> Recent area's of interest have included embedded compute— Using technologies like RNBO and TensorFlow-Lite, I'm currently exploring running and manipulating realtime audio via raspberry Pi. </p>
        </div> */}
        
        
        <h2 id='dev'style={{backgroundColor: backgroundColor}}  className="px-24 py-24 text-7xl  font-poppinsmedium">
        <span className="textTransition">Development</span></h2>            
        <section>
          <div style={{backgroundColor: backgroundColor}}  className="gap-10 px-24 pb-24 ] works-container-Dev">
          <div className="">
            <img className="object-cover w-4/5 mb-10 h-80" src ='http://mawtestsite.local/wp-content/uploads/2024/05/website_work_coding.png'></img>
            <h3 className="pb-5 text-3xl font-staraBold ">Modern Code</h3>
            <p className ='w-4/5 text-xl '>I work as a full-stack engineer fluent in coding principles and the latest technology. My biggest attribute however, is my willingness to learn. Here is an example of modern react being used to conditionally render the header you see above!</p>
          </div>
          <div className="">
            <img className="object-contain w-4/5 mb-10 h-80" src ='http://mawtestsite.local/wp-content/uploads/2024/05/webstack_composite.png'></img>
            <h3 h3 className="pb-5 text-3xl font-staraBold ">Wide Stack</h3>
            <p className ='w-4/5 text-xl '>My current technology stack includes HTML, CSS, Javascript, Python, React, Node, Conda, Git, Spline, RNBO, Max, M4L, GraphQL, MongoDB Express, and more.</p>
          </div>
          <div className="">
            <img className="object-cover w-4/5 mb-10 h-80" src ='http://mawtestsite.local/wp-content/uploads/2024/05/ai_training_model_1.png'></img>
            <h3 className="pb-5 text-3xl font-staraBold " >New Tech</h3>
            <p className ='w-4/5 text-xl '>I has proven one of the most exciting new technologies, and it would be a mistake to avoid taking advantage of it. I have been exploring AI (and subsets like ML, MIR, NLP). Here is an example of a locally configured voice cloning model that I trained on myself.</p>
          </div>
          <div className="">
            <img className="object-cover w-4/5 mb-10 h-80" src ='http://mawtestsite.local/wp-content/uploads/2024/05/raspberry_pi_push3.jpeg'></img>
            <h3 className="pb-5 text-3xl font-staraBold " >Embedded Compute</h3>
            <p className ='w-4/5 text-xl '>Recent area's of interest have included embedded compute— Using technologies like RNBO and TensorFlow-Lite, I'm currently exploring running and manipulating realtime audio via raspberry Pi. </p>
          </div>
          </div>
        </section>

      
      <h2 style={{backgroundColor: backgroundColor}} id='design' className="px-24  py-24 pt-28 text-7xl font-poppinsmedium"><span className="textTransition">Brand and Design</span></h2>
      <section>
      <div style={{backgroundColor: backgroundColor}} className="gap-10 px-24 pb-24 works-container-Design ">
        <div>
        <video className="object-cover h-[20REM]  mb-10 " autoPlay loop muted  src= 'http://mawtestsite.local/wp-content/uploads/2024/05/brand_excercise_compressed.mov'></video>
          <h3 className="pb-5 text-3xl font-staraBold">Brand</h3>
          <p className="text-xl"> With nearly a decade of experience in both local and global engagement, I believe a holistic approach to brand, community, and product is essential. 
          <br></br><br></br>
          My work as an Ableton Brand Manager demonstrated the intersection of these elements, and taught me how to nourish a growing and vibrant community along with the tools to do so (above is a Miro Brand Map I created for the company Groover). Please reach out if you need help developing a brand strategy or empowering and nurturing your community! </p>
        </div>
        <div>
          <img className="object-cover motion-image h-[20REM] mb-10 " src='http://mawtestsite.local/wp-content/uploads/2024/05/design_books_new.jpg'></img>
          <h3 className="pb-5 text-3xl font-staraBold">Research</h3>
          <p className="text-xl">I've been fascinated by design principles for ages and continue to research & augment my knowledge in this field. Human centered design practices remain essential and it is exciting to see how we might instill them in new autonomous technologies. 
          <br></br>  <br></br>     
          I have had the pleasure to participate in and execute a large number of user research sessions for Ableton, Nanaya, & others. Gauging your community and how their sentiment about product, brand, & design is invaluable. </p>
        </div>
        <div>
          <img className="object-cover h-[20REM] mb-10 motion-image " src='http://mawtestsite.local/wp-content/uploads/2024/05/Figma_delay_creation.png'></img>
          <h3 className="pb-5 text-3xl font-staraBold">Design</h3>
          <p className="text-xl">The piece that joins good product development and brand identity is design. Never able to sit-one-out, I have enjoyed learning the tools of the design trade and have spent over 5 years refining the vision for great products.  
          <br></br>  <br></br>
          My toolset includes Figma, Affinity Designer, Affinity Photo, Affinity Publisher, Davinci Resolve, Miro, and Sketch. Design is a throughline that I am aware of through all my work and collaborations.</p>
        </div>
      </div>
      </section> 


    


   
        {/* <h2 className="px-24 py-24  bg-[#d7a582]  pt-28 text-5xl font-poppinsmedium">Brand and Design</h2>            
        <div id='design' className="text-4xl px-24 pb-24    works-container-Design bg-[#d7a582]">
          <video className="p-8 works-container-Design-sect1" autoPlay loop muted  src= 'http://mawtestsite.local/wp-content/uploads/2024/05/brand_excercise_compressed.mov'></video>
          <h3 className="pl-8 text-3xl pt-[28REM] font-staraBold works-container-Design-sect1">Brand</h3>
          <p className = 'p-8 text-xl pt-[33REM] text-balance works-container-Design-sect1'>With nearly a decade of experience in both local and global engagement, I believe a holistic approach to brand, community, and product is essential. 
          <br></br>  <br></br>
          My work as an Ableton Brand Manager demonstrated the intersection of these elements, and taught me how to nourish a growing and vibrant community along with the tools to do so (above is a Miro Brand Map I created for the company Groover). Please reach out if you need help developing a brand strategy or empowering and nurturing your community!
          </p>

          <img className ='p-8 works-container-Design-sect2' src ='http://mawtestsite.local/wp-content/uploads/2024/05/design_books_new.jpg'></img>
          <h3 className="pl-8 text-3xl pt-[28REM] font-staraBold works-container-Design-sect2">Research</h3>
          <p className = 'p-8 text-xl pt-[33REM] works-container-Design-sect2'>Always curious— I've been fascinated by design principles for ages and continue to research & augment my knowledge in this field. Human centered design practices remain essential and it is exciting to see how we might instill them in new autonomous technologies. 
          <br></br>  <br></br>     
          I have had the pleasure to participate in and execute a large number of user research sessions for Ableton, Nanaya, & others. Gauging your community and how their sentiment about product, brand, & design is invaluable. 
          </p>

          <img className ='p-8 works-container-Design-sect3' src ='http://mawtestsite.local/wp-content/uploads/2024/05/Figma_delay_creation.png'></img>
          <h3 className="pl-8 text-3xl pt-[28REM] font-staraBold works-container-Design-sect3">Design</h3>
          <p className = 'p-8 text-xl pt-[33REM] works-container-Design-sect3'>
          The piece that joins good product development and brand identity is design. Never able to sit-one-out, I have enjoyed learning the tools of the design trade and have spent over 5 years refining the vision for great products.  
          <br></br>  <br></br>
          My toolset has included Figma, Affinity Designer, Affinity Photo, Affinity Publisher, Davinci Resolve, Miro, and Sketch. Design is a throughline that I am aware of through all my work and collaborations.
          </p>
        </div> */}

        <h2 style={{backgroundColor: backgroundColor}}
         id='music' className="px-24 py-24 bg-[#d78289] pt-28 text-7xl font-poppinsmedium"><span className="textTransition">Music</span></h2>        
        <section>
        <div style={{backgroundColor: backgroundColor}} className="px-24 ">
          <div className="gap-10 pb-10 place-items-center works-container-Music">
            <img className="object-cover h-full rounded-md " src='http://mawtestsite.local/wp-content/uploads/2024/05/IMG_2631_small.jpg'></img>
            <p className="self-center text-2xl ">I am a leading expert in the Ableton ecosystem and have helped with live playback for some of the biggest artists touring today. From micro-editing and vocal tuning, to sound design and songwriting, I am happy to collaborate in all parts of the sonic process. See some examples of my work below.</p>
          </div>
          <div style={{backgroundColor: backgroundColor}} className=" bg-[#d78289] gap-10 pb-10 works-container-Music2">
            <AudioPlayer url='http://mawtestsite.local/wp-content/uploads/2024/05/Chordal-Reasons-4_16_24.mp3' />
            <AudioPlayer url='http://mawtestsite.local/wp-content/uploads/2024/05/Charged_Crystal_5_29_24.mp3' />
            <AudioPlayer url='http://mawtestsite.local/wp-content/uploads/2024/05/Small-Light.mp3' />
            <AudioPlayer url='http://mawtestsite.local/wp-content/uploads/2024/05/Small-Light.mp3' />
            <div className="">
          <footer className="mt-24 text-xs">© 2024 - all rights reserved</footer>
          </div>
          <ul  className="flex items-stretch gap-10 mt-24 footer2 ml-28">
            <li><a  href='https://www.youtube.com/watch?v=iYznuO2ANVk'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/yt_logo_dark.png'></img></a></li>
            <li><a  href='https://github.com/MattWaste'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/github-mark.png'></img></a></li>
            <li><a  href='https://mwdevices.gumroad.com/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/free-gumroad-7662442-6297428.png'></img></a></li>
            <li><a  href='https://www.instagram.com/mwdevices/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/ig_logo_sm_png.png'></img></a></li>
            <li><a  href='https://www.linkedin.com/in/matthew-west-profile/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/08/linkedin-logo.png'></img></a></li>
        </ul>  
          </div>
        </div>    
        </section>
        

  


      
    
        {/* <h2 className="px-24 py-24 bg-[#d78289] pt-28 text-5xl font-poppinsmedium">Music</h2>
        <div id='music' className="px-24 works-container-Music bg-[#d78289]">    
            <img className='sect1' src='http://mawtestsite.local/wp-content/uploads/2024/05/IMG_2631_small.jpg' />
            <p className="pl-8 text-xl sect2 pt-36">
            A cooler older sister and LA FM radio led to my love of music, and helped me to find my guiding light."
            I have worked professionally in music production for over 10 years with experience writing, producing, and engineering. 
            <br></br><br></br>
            I am a world-class expert in the Ableton ecosystem and have helped with live playback for some of the biggest artists touring today. From micro-editing and vocal tuning, to sound design and songwriting, I am happy to collaborate in all parts of the sonic process. See some examples of my work below.
            </p>
            <div className=" sect3 audio-player-container">
                <AudioPlayer url='http://mawtestsite.local/wp-content/uploads/2024/05/Chordal-Reasons-4_16_24.mp3' />
                <AudioPlayer url='http://mawtestsite.local/wp-content/uploads/2024/05/Charged_Crystal_5_29_24.mp3' />
            </div>
            <div className="sect4 audio-player-container">
                <div className="pl-4">
                <AudioPlayer url='http://mawtestsite.local/wp-content/uploads/2024/05/Small-Light.mp3' />
                <AudioPlayer url='http://mawtestsite.local/wp-content/uploads/2024/05/Power_Trip__Live12_5_29_24-120Emaj.mp3' />
                </div>           
            </div>
        <div className="pb-10">
        <footer className="text-xs">© 2024 - all rights reserved</footer>
        </div>
        <ul  className="flex items-stretch gap-10 ml-28 footer2">
            <li><a  href='https://www.youtube.com/watch?v=iYznuO2ANVk'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/yt_logo_dark.png'></img></a></li>
            <li><a  href='https://github.com/MattWaste'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/github-mark.png'></img></a></li>
            <li><a  href='https://mwdevices.gumroad.com/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/free-gumroad-7662442-6297428.png'></img></a></li>
            <li><a  href='https://www.instagram.com/mwdevices/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/ig_logo_sm_png.png'></img></a></li>
            <li><a  href='https://www.linkedin.com/in/matthew-west-profile/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/08/linkedin-logo.png'></img></a></li>
        </ul>
        </div> */}
      </div>
    </div>
</div>
) 
}