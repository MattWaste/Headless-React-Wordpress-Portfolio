import React from "react";

export default function Footer(props) {
  return (
    <div>
      <footer className="flex py-12 pl-12 text-xs sm:px-4 sm:flex-wrap sm:justify-center pr-36 sm:gap-4">
        <p className="flex-grow sm:text-center">© 2024 By Matthew West. - all rights reserved</p>
        <ul className="flex items-stretch gap-10">
        <li><a href='https://www.youtube.com/watch?v=iYznuO2ANVk'><img className="max-h-5 min-h-5 min-w-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/yt_logo_dark.png' alt="YouTube"></img></a></li>
        <li><a href='https://github.com/MattWaste'><img className="max-h-5 min-h-5 min-w-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/github-mark.png' alt="GitHub"></img></a></li>
        <li><a href='https://mwdevices.gumroad.com/'><img className="max-h-5 min-h-5 min-w-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/free-gumroad-7662442-6297428.png' alt="Gumroad"></img></a></li>
        <li><a href='https://www.instagram.com/mwdevices/'><img className="max-h-5 min-h-5 min-w-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/ig_logo_sm_png.png' alt="Instagram"></img></a></li>
        <li><a href='https://www.linkedin.com/in/matthew-west-profile/'><img className="max-h-5 min-h-5 min-w-5" src='http://mawtestsite.local/wp-content/uploads/2023/08/linkedin-logo.png' alt="LinkedIn"></img></a></li>
        </ul>
      </footer>
    </div>
  );
}