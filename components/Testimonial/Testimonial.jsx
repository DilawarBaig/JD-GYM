import React from "react";
import Slider from "react-slick";
import img2 from "../../assets/kab.jpg";
import img3 from "../../assets/saifi.jpg";
import img5 from "../../assets/zeeshu.jpg";
import img6 from "../../assets/mirza.jpg";
import img7 from "../../assets/asad.jpg";

const testimonialData = [
  {
    id: 2,
    name: "Khawar",
    img: img2,
    text: "I've been a member of several gyms over the years, but this one stands out. The staff is incredibly friendly, the equipment is top-notch, and the atmosphere is always motivating. I actually look forward to my workouts now!",
  },
  {
    id: 3,
    name: "Saif",
    img: img3,
    text: "Joining this gym has been a game-changer for me. The personal trainers are knowledgeable and genuinely care about your progress. I've seen amazing results in just a few months. Highly recommend!",
  },
  {
    id: 5,
    name: "Zeeshan",
    img: img5,
    text: "This gym has everything I need, from a wide range of classes to excellent facilities. The community here is supportive and encouraging, making every workout session enjoyable. Best decision ever!",
  },
  {
    id: 6,
    name: "Shehzad",
    img: img6,
    text: "I love the variety of classes offered here. Whether it's yoga, spinning, or strength training, there's always something new to try. The instructors are fantastic and really push you to do your best.",
  },
  {
    id: 7,
    name: "Asad",
    img: img7,
    text: "The gym is always clean, and the equipment is well-maintained. The staff is approachable and ready to help with any questions. I've made great progress in my fitness journey thanks to this place.",
  },
];

const Testimonial = () => {
  let settings = {
    dot: true,
    arrow: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slideToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 dark:text-gray-300 dark:bg-gray-900 ">
      <div className="container mx-auto">
        <div className=" group relative"> 
          <h1 className="text-3xl font-bold text-center mt-5 mb-20  ">Testimonial</h1>
          <span className='inline-block absolute color h-[2px] w-full -bottom-5 transition-all  duration-300 left-0'></span>

        </div>
        <div>
          <Slider {...settings}>
            {testimonialData.map(({ id, img, name, text }) => (
              <div className="my-2" key={id}>
                <div className="flex flex-col gap-4 shadow-lg py-3 px-6 mx-4 rounded-xl dark:bg-gray-950 bg-[#f7f8f3] items-center text-center ">
                  <div className="mb-2">
                    <img src={img} className="rounded-full w-24 h-24 " alt="" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                   <div className="space-y-3">
                    <p className="text-xs text-gray-500 line-clamp-3 ">{text}</p>
                    <p className="text-lg font-bold text-black/70 dark:textcolor">{name}</p>
                   </div>
                  </div>
                   
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
