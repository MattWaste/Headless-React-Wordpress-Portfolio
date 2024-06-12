import React from "react";

export default function Footer(props){
    let id = props.id; 
    
    return(
        <>
         <div id= {`${id}`} className="home-container-footer about-container-footer works-container-footer ">
        <footer className="text-xs">© 2024 - all rights reserved</footer>
        </div>
        <div id= {`${id}`} className="home-container-footer2 about-container-footer2 works-container-footer2">
        <ul  className="flex items-stretch gap-10 mx-10 ">
            <li><a  href='https://www.youtube.com/watch?v=iYznuO2ANVk'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/yt_logo_dark.png'></img></a></li>
            <li><a  href='https://github.com/MattWaste'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/github-mark.png'></img></a></li>
            <li><a  href='https://mwdevices.gumroad.com/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/free-gumroad-7662442-6297428.png'></img></a></li>
            <li><a  href='https://www.instagram.com/mwdevices/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/ig_logo_sm_png.png'></img></a></li>
            <li><a  href='https://www.linkedin.com/in/matthew-west-profile/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/08/linkedin-logo.png'></img></a></li>
        </ul>
        </div>
        </>
    )
}





