import React from "react";
import img1 from "../assets/img/team/radek-opt-1920.WEBP";
import img2 from "../assets/img/team/radovan-opt-1920.WEBP";
import img3 from "../assets/img/team/michael-opt-1920.WEBP";
import img4 from "../assets/img/team/jamie-opt-1920.WEBP";
import img5 from "../assets/img/team/rahul-opt-1920.WEBP";
import img6 from "../assets/img/team/tomas-opt-1920.WEBP";
import img7 from "../assets/img/team/luis-opt-1920.WEBP";
import img8 from "../assets/img/team/ihor-opt-1920.WEBP";
import img9 from "../assets/img/team/bohdan-opt-1920.WEBP";
import linkdin from "../assets/img/social/linkedin+square+icon-1320168278649782468.png";
import adimg1 from "../assets/img/advisors/arthur-opt-1920.WEBP";
import adimg2 from "../assets/img/advisors/blaine-opt-1920.WEBP";
import adimg3 from "../assets/img/advisors/steve-opt-1920.WEBP";
import adimg4 from "../assets/img/advisors/riccardo-opt-1920.WEBP";
import adimg5 from "../assets/img/advisors/giacomo-opt-1920.WEBP";
import bgSvg from "../assets/img/banners/5781083.jpg";
import bgSvg2 from "../assets/img/banners/bg-figure.svg";
import Slick_slider from "./Slick_slider";
const TeamData = [
  {
    img: img1,
    name: "Radek Pléha",
    parag: "Co-Founder",
    link: "https://www.linkedin.com/in/radekpleha/",
    linkdinIcon: linkdin,
  },
  {
    img: img2,
    name: "Radovan Voda",
    parag: "Co-Founder",
    link: "https://www.linkedin.com/in/radovan-voda/",
    linkdinIcon: linkdin,
  },
  {
    img: img3,
    name: "Michael Laurensder",
    parag: "Marketing Director ",
    link: "https://www.linkedin.com/in/michaellaurens/",
    linkdinIcon: linkdin,
  },
  {
    img: img4,
    name: "Jamie Wheeler",
    parag: "Marketing and Operations Manager",
    link: "https://www.linkedin.com/in/jamie-wheeler1988/",
    linkdinIcon: linkdin,
  },
  {
    img: img5,
    name: "Rahul A R",
    parag: "Blockchain Lead",
    link: "https://www.linkedin.com/in/rahular101/",
    linkdinIcon: linkdin,
  },
  {
    img: img6,
    name: "Tomas Rokos",
    parag: "Technical Analytist",
    link: "https://www.linkedin.com/in/tomas-rokos/",
    linkdinIcon: linkdin,
  },
  {
    img: img7,
    name: "Luis Ricardo Sanchez",
    parag: "Senior Blockchain Developer",
    link: "https://www.linkedin.com/in/lurisante/",
    linkdinIcon: linkdin,
  },
  {
    img: img8,
    name: "Ihor Medvediv",
    parag: "Growth Strategist",
    link: "https://www.linkedin.com/in/ihor-medvid-208211129/",
    linkdinIcon: linkdin,
  },
  {
    img: img9,
    name: "Bohdan Stavskyi",
    parag: "Financial Planning & Analysis",
    link: "https://www.linkedin.com/in/bohdan-stavskyi/",
    linkdinIcon: linkdin,
  },
];
const AdvisorData = [
  {
    img: adimg1,
    name: "Arthur Iinuma",
    link: "https://www.linkedin.com/in/arthur-iinuma-4115ba17/",
    linkdinIcon: linkdin,
  },
  {
    img: adimg2,
    name: "Blaine Graboyes",
    link: "https://www.linkedin.com/in/blaineglobal/",
    linkdinIcon: linkdin,
  },
  {
    img: adimg3,
    name: "Steve Berman",
    link: "https://www.linkedin.com/in/stevenmberman/",
    linkdinIcon: linkdin,
  },
  {
    img: adimg4,
    name: "Riccardo Barcolari",
    link: "https://www.linkedin.com/in/rbarcolari/",
    linkdinIcon: linkdin,
  },
  {
    img: adimg4,
    name: "Giacomo Voltolina",
    link: "https://www.linkedin.com/in/giacomo-voltolina-384b21125/",
    linkdinIcon: linkdin,
  },
];
const Team = () => {
  return (
    <div
      className="h-auto pt-[150px] bg-cover bg-center bg-no-repeat  justify-center bg-gradient-to-r from-blue-500 to-purple-500 "
      style={{ backgroundImage: `url(${bgSvg})`, backgroundSize: "cover" }}
    >
      <div className="sm:w-[50%] w-[80%] text-center mx-auto">
        <h1 className="md:text-[60px] text-[35px] font-semibold">
          A team you can trust
        </h1>
        <p className="sm:w-[60%] w-full mx-auto">
          It's not just about the people behind the project, it's about the
          people in front.
        </p>
      </div>
      <div className="w-[70%] py-[50px] mx-auto rounded-[30px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 flex justify-around">
        {TeamData.map((items, id) => (
          <div className="" key={id}>
            <a href={items.link}>
              <div className="w-[100%] bg-white rounded-[20px] text-center flex flex-col items-center py-[30px] px-[20px] transition-all hover:translate-y-4 ease-out delay-100 hover:bg-yellow-500">
                <img
                  src={items.img}
                  alt="img"
                  className="h-40 rounded-[30px]"
                />
                <h2 className="text-[16px] my-[10px] font-semibold">
                  {items.name}
                </h2>
                <p className="my-[10px]">{items.parag}</p>
                <a href={items.link} target="_blank">
                  <img className="h-8" src={items.linkdinIcon} alt="logo" />
                </a>
              </div>
            </a>
          </div>
        ))}
      </div>
      {/* advisors section start here */}
      <div className="pt-[50px] pb-[30px]">
        <div className="text-center">
          <h1 className="md:text-[60px] text-[35px] font-semibold">
            Our advisors
          </h1>
        </div>
        <div className="w-[70%] py-[50px] mx-auto rounded-[30px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 flex justify-around ">
          {AdvisorData.map((items, id) => (
            <div className="" key={id}>
              <a href={items.link} target="_blank">
                <div className="w-[100%] bg-white rounded-[20px] text-center flex flex-col items-center py-[30px] px-[20px]  transition-all hover:translate-y-4 ease-out delay-100 hover:bg-yellow-500">
                  <img
                    src={items.img}
                    alt="img"
                    className="h-40 rounded-[30px]"
                  />
                  <h2 className="text-[16px] my-[10px] font-semibold">
                    {items.name}
                  </h2>
                  <p className="my-[10px]">{items.parag}</p>
                  {/* <a href={items.link} target='_blank'>
                                   <img className='h-8' src={items.linkdinIcon} alt="logo" />
                               </a> */}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-center text-[32px] font-bold font-[Poppins,Arial,sans-serif] text-white">
          Backers and Partners
        </h2>
        <Slick_slider />
      </div>
    </div>
  );
};

export default Team;
