import React from "react";
import MemberCard from "../../cards/members/MemberCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MemberHeroContainer({ members }) {
  let settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="h-4/5 w-full flex flex-col items-center justify-center">
      <Slider className="w-full" {...settings}>
        {members &&
          members.map((member) => (
            <MemberCard key={member._id} member={member} />
          ))}
      </Slider>
    </div>
  );
}
