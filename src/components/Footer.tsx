import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-[#222222] mt-8 p-8">
        <div className="container mx-auto flex flex-col md:flex-row gap-12 ">
          <div className="space-y-5">
            <h6 className="text-white font-semibold text-xl uppercase">
              Bike Index
            </h6>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              faq
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              blog
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              help
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              about
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              we are here
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Stolen Bike Recoveries
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Get your stolen bike
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              back
            </Link>
          </div>
          <div className="space-y-5">
            <h6 className="text-white font-semibold text-xl uppercase">
              SUPPORT US
            </h6>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Donate
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              store
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Ambassadors
            </Link>
          </div>
          <div className="space-y-5">
            <h6 className="text-white font-semibold text-xl uppercase">
              RESOURCES
            </h6>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              API documentation
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Dev Resources
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Design & Logos
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Security
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Bike Manufacturer List
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Protect your bike
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Stolen Bike Map
            </Link>
          </div>
          <div className="space-y-5">
            <h6 className="text-white font-semibold text-xl uppercase">
              WHO WE SERVE
            </h6>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Bike Shops
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Schools and
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Universities
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Cities
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Law Enforcement
            </Link>
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Community Groups
            </Link> 
            <Link
              to="/"
              className="text-[#a4a4a4] uppercase block hover:underline text-xs"
            >
              Press inquiries
            </Link>
          </div>
    
          <div>
            <FacebookIcon sx={{color: "#a4a4a4", width: "50px", height: "50px", "&:hover": {color: "#fff"}}} />
            <TwitterIcon sx={{color: "#a4a4a4", width: "50px", height: "50px", "&:hover": {color: "#fff"}}} />
            <InstagramIcon sx={{color: "#a4a4a4", width: "50px", height: "50px", "&:hover": {color: "#fff"}}} />
          </div>
        </div>
      </div>
      <div className="bg-[#111111]"></div>
    </div>
  );
};

export default Footer;
