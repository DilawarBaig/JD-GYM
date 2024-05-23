import React from "react";
import img from "../../assets/img.jpg";
import play from "../../assets/playstore.png";
import app from "../../assets/appstore.png";

const AppBanner = () => {
  const bannerImg = {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div className="py-14 dark:bg-gray-950 bg-[#f7f8f3]">
      <div className="container text-white  mx-auto  ">
        <div
          style={bannerImg}
          className=" sm:flex sm:justify-end sm:items-center rounded-xl bg-blue-800 "
        >
          <div className="sm:min-h-[400px] bg-black/60 w-[100%]">
            <div >
              <div className="max-w-xl space-y-6 mx-auto mt-24 ">
                <h1 className="text-2xl text-center sm:text-4xl font-semibold">
                  Download the app
                </h1>
                <p className="text-center sm:px-20">
                  Over the last 46 years, our iconic gym brand has set the
                  standard for all others to follow. Legends have been made here
                  since 1976. Now it’s your turn.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <a href="#">
                    <img
                      src={app}
                      alt=""
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={play}
                      alt=""
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
