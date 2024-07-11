import React, { useEffect, useState} from 'react';


export default function Header(props){

    const [isSmallScreen, setisSmallScreen] = useState(window.innerWidth < 768);

useEffect(() => {
    // Define the function to handle resize
    const handleResize = () => {
      setisSmallScreen(window.innerWidth < 768);

    };
  
    // Call handleResize immediately to set the initial state
    handleResize();
  
    // Add event listener
    window.addEventListener('resize', handleResize);
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once on mount


    let cssClass = props.className;
    let id = props.id;
    let cssClass2 = props.cssClass2;

    return(
       
        <div id={`${id}`} className={`${cssClass} overflow-visible text-lg `}>
            <ul className="flex flex-wrap justify-end gap-10 py-5 sm:justify-center sm:gap-4 sm:px-4 px-36"> 
                <li><a className=" hover:text-violet-600"  href="/">Home</a></li>
                <li><a className=" hover:text-violet-600" href="/contact">Contact</a></li>
                <li><a className=" hover:text-violet-600" href="/about">About</a></li>
                <div className="dropdown">
                    <button className={`dropbtn ${cssClass2} hover:text-violet-600`}> <a href="/works">Works</a></button>
                    <div  className="dropdown-content">
                    <a className=" hover:text-[#38A12E]" href={'https://mattewest.com/works#mwdevices'}>{isSmallScreen ? 'MWD': 'MW Devices'}</a>
                    <a className=" hover:text-[#3752FF]" href={'https://mattewest.com/works#dev'}>Dev</a>
                    <a className=" hover:text-[#F69D1B]" href={'https://mattewest.com/works#design'}>{isSmallScreen ? 'B&D': 'Brand & Design'}</a>
                    <a className=" hover:text-[#E22C1D]" href={'https://mattewest.com/works#music'}>Music</a>
                    </div>
                </div>
            </ul>
        </div>
    )
}
