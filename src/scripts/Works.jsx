import React, {useState, useEffect}  from "react";
import Header from "./Header";
import AudioPlayer from './AudioPlayer.jsx';
import Footer from "./Footer.jsx";


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
        } else {asdasd 
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
        header.style.webkitBackdropFilter = 'blur(150px)'
      } else {
        header.style.backdropFilter = 'blur(0px)';
        header.style.webkitBackdropFilter = 'blur(0px)';
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
<div className="main-container">
<Header id = 'staticHeader'></Header>
        <div className="px-48 sm:px-0 place-items-center works-container-logo ">
            <img className="w-2/3 min-h-[300px] min-w-[300px] sm:mt-0  mt-40 h-4/5 " src="https://mattewest.com/wp-content/uploads/2024/07/logo_Platform_Export_12_4_20.svg" alt="Logo" />
            <p className= "pt-12 pb-12 text-2xl text-center sm:pt-0">See what I do </p>
            <div className="pb-64 animate-bounce" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mx-auto mt-24 mb-36">
              <path strokeLinecap="square" strokeLinejoin="bevel" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
        </div>       
      <h2 id='mwdevices' style={{backgroundColor: backgroundColor}} className="px-24 py-24 sm:text-5xl text-7xl sm:px-6 sm:text-center sm:py-14 sm:text-nowrap font-poppinsmedium">
      <span className="textTransition">MW Devices</span>
      </h2>
      <section>
      <div style={{backgroundColor: backgroundColor}} className="gap-10 px-48 sm:px-6 pb-14 place-items-center works-container-MWDevicesA">
        <video autoPlay loop playsInline muted className="col-span-1 rounded-md" src='https://mattewest.com/wp-content/uploads/2024/07/Screen-Recording-2024-05-21-at-5.56.35-PM-1.mov'></video>
        <p className="w-4/5 col-span-1 text-2xl text-center ">MW Devices Is a Brooklyn based music software and technology company that seeks to make fellow musicians and creatives lives more lively. Tools like ‘Multi-Band Panner’, 'Onlooker', and 'Shattered Delay' have seen four figure downloads since the company's inception in 2015.</p>
      </div>
      <div style={{backgroundColor: backgroundColor}} className="gap-10 px-48 pb-24 sm:pb-6 sm:gap-5 sm:px-6 works-container-MWDevicesB">
          <div>
            <img className="object-cover w-full mb-10 motion-image h-36" src= 'https://mattewest.com/wp-content/uploads/2024/07/Screenshot-2024-05-22-at-10.21.50-AM.png'></img>
            <h3 className="pb-5 text-3xl font-staraBold sm:text-2xl ">Collaborators</h3>
            <p className="text-xl sm:w-full ">Recent collaborations inlcude working with Ableton on the 'Building Max Devices' Pack for Live 12. Here is an included XY controller device I made with the support of the  Max for Live Team, taking advantage of Javascript and Max.</p>
          </div>
          <div>
            <img className="object-cover w-full mb-10 motion-image h-36" src= 'https://mattewest.com/wp-content/uploads/2024/07/gen_slice.png'></img>
            <h3 className="pb-5 text-3xl sm:text-2xl font-staraBold">New Paths</h3>
            <p className="text-xl sm:w-full "> 2024 will include an increased focus on emerging technologies, including Gen~, RNBO, and embedded computing. Please get intouch for any collaborative ideas or work. </p>
          </div>
      </div>
      </section>
             
        <h2 id='dev'style={{backgroundColor: backgroundColor}}  className="px-24 py-24 sm:text-5xl text-7xl sm:px-6 sm:text-center sm:py-14 sm:text-nowrap font-poppinsmedium">
        <span className="textTransition">Development</span></h2>            
        <section>
          <div style={{backgroundColor: backgroundColor}}  className="gap-10 px-48 pb-24 sm:pb-1 sm:gap-6 sm:px-6 works-container-Dev">
          <div className="">
            <img className="object-cover w-4/5 mb-10 sm:w-full sm:object-contain sm:h-36 h-80" src ='https://mattewest.com/wp-content/uploads/2024/07/website_work_coding.png'></img>
            <h3 className="pb-5 text-3xl sm:text-2xl font-staraBold ">Modern Code</h3>
            <p className ='w-4/5 text-xl sm:w-full '>I work as a full-stack engineer fluent in coding principles and the latest technology. Here is an example of modern React being used to conditionally render the header you see above!</p>
          </div>
          <div className="">
            <img className="object-contain w-4/5 mb-10 sm:w-full h-80 sm:h-36" src ='https://mattewest.com/wp-content/uploads/2024/07/webstack_composite.png'></img>
            <h3 h3 className="pb-5 text-3xl sm:text-2xl font-staraBold ">Wide  Stack</h3>
            <p className ='w-4/5 text-xl sm:w-full '>My current technology stack includes HTML, CSS, Javascript, Python, React, Node, Conda, Git, Spline, RNBO, Max, M4L, GraphQL, MongoDB Express, and more.</p>
          </div>
          <div className="">
            <img className="object-cover w-4/5 mb-10 sm:w-full sm:h-36 h-80" src ='https://mattewest.com/wp-content/uploads/2024/07/ai_training_model_1.png'></img>
            <h3 className="pb-5 text-3xl sm:text-2xl font-staraBold " >New Tech</h3>
            <p className ='w-4/5 text-xl sm:w-full '> AI has proven one of the most exciting new technologies. I have been exploring AI (and subsets like ML, MIR, NLP). Here is an example of a locally configured voice cloning model that I trained on myself.</p>
          </div>
          <div className="">
            <img className="object-cover w-4/5 mb-10 sm:w-full sm:h-36 h-80" src ='https://mattewest.com/wp-content/uploads/2024/07/raspberry_pi_push3.jpeg'></img>
            <h3 className="pb-5 text-3xl sm:text-2xl font-staraBold " >Embedded Compute</h3>
            <p className ='w-4/5 text-xl sm:w-full '>Recent area's of interest have included embedded compute— Using technologies like RNBO and TensorFlow-Lite, I'm currently exploring running and manipulating realtime audio via raspberry Pi. </p>
          </div>
          </div>
        </section>
      
      <h2 style={{backgroundColor: backgroundColor}} id='design' className="px-24 py-24 sm:text-5xl text-7xl sm:px-6 sm:text-center sm:py-14 font-poppinsmedium"><span className="textTransition">Brand & Design</span></h2>
      <section>
      <div style={{backgroundColor: backgroundColor}} className="gap-10 px-48 pb-24 sm:pb-0 sm:px-6 works-container-Design ">
        <div>
        <video className="object-cover h-[20REM] sm:w-full   mb-10 " autoPlay playsInline loop muted  src= 'https://mattewest.com/wp-content/uploads/2024/07/brand_excercise_compressed-1.mov'></video>
          <h3 className="pb-5 text-3xl sm:text-2xl font-staraBold">Brand</h3>
          <p className="text-xl"> I believe a holistic approach to brand, community, and product is key. My work as an Ableton Brand Manager demonstrated the intersection of these elements, and taught me how to nourish a growing and vibrant community along with the tools to do so.</p>
        </div>
        <div>
          <img className="object-cover motion-image h-[20REM] sm:w-full mb-10 " src='https://mattewest.com/wp-content/uploads/2024/07/design_books_new.jpg'></img>
          <h3 className="pb-5 text-3xl sm:text-2xl font-staraBold">Research</h3>
          <p className="text-xl">Human centered design practices remain essential. I have had the pleasure to participate in and execute a large number of user research sessions for Ableton & others. Gauging your community and their sentiment about product, brand, & design is invaluable. </p>
        </div>
        <div>
          <img className="object-cover h-[20REM] mb-10 sm:w-full  motion-image " src='https://mattewest.com/wp-content/uploads/2024/07/Figma_delay_creation.png'></img>
          <h3 className="pb-5 text-3xl sm:text-2xl font-staraBold">Design</h3>
          <p className="text-xl"> I have enjoyed learning the tools of the design trade and have spent over 5 years refining the vision for great products. My toolset includes Figma, Affinity Designer, Affinity Photo, Affinity Publisher, Davinci Resolve, Miro, and Sketch. Design is a throughline that I am aware of through all my work and collabs.</p>
        </div>
      </div>
      </section> 
        <h2 style={{backgroundColor: backgroundColor}}
         id='music' className="px-24 py-24 sm:text-5xl text-7xl sm:px-6 sm:text-center sm:py-14 sm:text-nowrap font-poppinsmedium"><span className="textTransition">Music</span></h2>        
        <section>
        <div style={{backgroundColor: backgroundColor}} className="px-48 sm:px-6 ">
          <div className="gap-10 pb-10 place-items-center works-container-Music">
            <img className="object-cover rounded-md " src='https://mattewest.com/wp-content/uploads/2020/10/IMG_2631_small-min.jpg'></img>
            <p className="self-center text-2xl sm:text-xl ">I am a leading expert in the Ableton ecosystem and have helped with live playback for some of the biggest artists touring today. From micro-editing and vocal tuning, to sound design and songwriting, I am happy to collaborate in all parts of the sonic process. See some examples of my work below.</p>
          </div>
          <div style={{backgroundColor: backgroundColor}} className=" bg-[#d78289] gap-10 pb-10 works-container-Music2">
            <AudioPlayer url='https://mattewest.com/wp-content/uploads/2024/07/Chordal-Reasons-4_16_24.mp3' />
            <AudioPlayer url='https://mattewest.com/wp-content/uploads/2024/07/Charged_Crystal_5_29_24.mp3' />
            <AudioPlayer url='https://mattewest.com/wp-content/uploads/2024/07/Small-Light.mp3' />
            <AudioPlayer url='https://mattewest.com/wp-content/uploads/2024/07/Power_Trip__Live12_5_29_24-120Emaj.mp3' />
            <div className="">
          </div>
          </div>
        </div>    
        </section>
        <Footer></Footer>
      </div>   
) 
}