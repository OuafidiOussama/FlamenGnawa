import React from "react";
import MemberCard from "../../cards/members/MemberCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MemberHeroContainer({ members }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="h-4/5 w-full flex flex-col items-center justify-center">
      <Slider className="w-full" {...settings}>
        {members && members.map((member) => <MemberCard member={member} />)}
      </Slider>
    </div>
  );
}
