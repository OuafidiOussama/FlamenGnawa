import React from "react";
import biographyBackground from "../../../assets/biography.png";
import picture from "../../../assets/Final.png";
import Flamengnawa from "../../../assets/flamengnawa.png";
import { useNavigate } from "react-router-dom";

export default function BiographyHero() {
  const navigate = useNavigate()

  const bioRedirect = () => {
    navigate('/biography')
  }
  return (
    <div className="relative w-full">
      <div className="w-full h-[200vh] md:h-screen">
        <img
          src={biographyBackground}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 w-full flex flex-col md:flex-row gap-20 p-10 sm:px-20 md:py-10 font-description">
        <div className="md:w-1/2 h-full overflow-clip uppercase">
          <div className="flex items-center gap-5 text-xl text-red">
            <p>Biography</p>
            <hr className="w-full border-[1px]" />
          </div>
          <p className="relative -top-1 -left-1 sm:-left-2 opacity-20 font-bold text-red text-5xl sm:text-7xl lg:text-8xl tracking-wider">
            biography
          </p>
          <p className="font-bold text-4xl">bring happiness through music</p>
          <div className="md:w-2/3 pt-5">
            <img src={picture} alt="" className="w-full h-96 object-cover" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="h-2/4 flex justify-center">
            <img src={Flamengnawa} alt="" className="h-[60vh] md:h-full object-fit" />
          </div>
          <p className="my-5 h-26 sm:h-20 md:h-32 lg:h-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi quo sit aspernatur tempora voluptatum laudantium sequi ea! Ullam porro voluptate optio distinctio vitae quidem, quas quae. Facere, soluta sed?</p>
          <div className="relative group flex items-center overflow-clip mt-10 md:mt-12 xl:mt-0">
            <button className="border-l-4 border-red py-2 px-5 uppercase z-10 font-semibold" onClick={bioRedirect}>find out more</button>
            <div className="absolute top-0 group-hover:left-0 -left-[185px] bg-red w-[185px] h-10 duration-300 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
