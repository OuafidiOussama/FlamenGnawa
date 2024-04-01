import React from "react";
import biographyBackground from "../assets/biography.jpeg";

export default function Biography() {
  return (
    <div className="relative w-full uppercase font-description ">
      <div className="w-full opacity-5">
        <img
          src={biographyBackground}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 w-full px-20 py-10 font-description">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-5 text-xl text-red">
            <hr className="w-80 border-[1px]" />
            <p>Biography</p>
            <hr className="w-80 border-[1px]" />
          </div>
        </div>
        <div className="py-5 flex flex-col items-center gap-5">
          <p className="text-4xl font bold">How it All Started ?</p>
          <p>
            Flamengnawan is an unique music band that originated in the vibrant
            city of Safi, Morocco, on August 27, 2022. The band's unique sound
            is a fusion of Flamenco, Gipsy, and Gnawa music genres, creating a
            mesmerizing blend that captivates audiences worldwide.
          </p>
          <p>
            At the heart of Flamengnawan's music are its talented members, each
            contributing their distinctive style and expertise to the band's
            dynamic sound. Led by three exceptional guitarists – the lead
            guitarist, harmonic guitarist, and soloist – Flamengnawan's music is
            characterized by intricate melodies, soulful rhythms, and passionate
            performances.
          </p>
          <p>
            Complementing the guitar trio is a skilled mandolinist, adding a
            layer of depth and richness to Flamengnawan's compositions. The
            band's bassist provides a solid foundation with deep, resonant
            tones, while the percussionist infuses energy and vitality into
            every beat, driving the music forward with infectious rhythms.
          </p>
          <p>
            Drawing inspiration from the rich cultural heritage of Morocco and
            beyond, Flamengnawan's music transcends boundaries, weaving together
            diverse influences to create a truly unique musical experience. With
            their soul-stirring melodies and electrifying performances,
            Flamengnawan continues to captivate audiences, leaving an indelible
            mark on the world of music.
          </p>
          <iframe
            width="1400"
            height="500"
            src="https://www.youtube.com/embed/MHMSDIHPMDM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Embedded youtube"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
