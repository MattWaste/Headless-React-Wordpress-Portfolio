import React from "react";

export default function Footer(props) {
  return (
    <div>
      <footer className="flex pr-36 pl-12 py-12 items-center  text-xs">
        <p className="flex-grow">© 2024 - all rights reserved</p>
        <ul className="flex items-stretch gap-10">
          <li><a href='https://www.youtube.com/watch?v=iYznuO2ANVk'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/yt_logo_dark.png' alt="YouTube"></img></a></li>
          <li><a href='https://github.com/MattWaste'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/github-mark.png' alt="GitHub"></img></a></li>
          <li><a href='https://mwdevices.gumroad.com/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/free-gumroad-7662442-6297428.png' alt="Gumroad"></img></a></li>
          <li><a href='https://www.instagram.com/mwdevices/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/07/ig_logo_sm_png.png' alt="Instagram"></img></a></li>
          <li><a href='https://www.linkedin.com/in/matthew-west-profile/'><img className="max-h-5" src='http://mawtestsite.local/wp-content/uploads/2023/08/linkedin-logo.png' alt="LinkedIn"></img></a></li>
        </ul>
      </footer>
    </div>
  );
}