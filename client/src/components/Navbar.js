import React from "react";
import facebook from "../assets/images/socialLogo/facebook.png";
import instagram from "../assets/images/socialLogo/instagram.png";
import youtube from "../assets/images/socialLogo/youtube.png";
import linkedin from "../assets/images/socialLogo/linkedin.png";
import whatapp from "../assets/images/socialLogo/whatapp.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 rounded-b-xl">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl font-bold">
            <span className="text-4xl text-red-600">Y</span>
            <span className="font-serif mt-2">mp4</span>
          </a>
        </div>
        <div className="flex"></div>
        <img className="w-6 mr-3" src={facebook} alt="" />
        <img className="w-6 mr-3" src={instagram} alt="" />
        <img className="w-6 mr-3" src={youtube} alt="" />
        <img className="w-6 mr-3" src={linkedin} alt="" />
        <img className="w-6 mr-3" src={whatapp} alt="" />
      </div>
    </div>
  );
}
