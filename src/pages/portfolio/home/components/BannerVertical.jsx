import bannervertical from "../../../../../public/portfolioImages/homebanner.svg";
import { FaApple } from "react-icons/fa";
import playstore from "../../../../../public/portfolioImages/playstore.svg";

function BannerVertical() {
  return (
    <section className="flex gap-4 flex-col-reverse md:flex-row p-2 items-center max-w-7xl mx-auto justify-between ">
      <div
        className="rounded-3xl p-3 md:h-[70vh] h-[60vh]"
        style={{
          background: `linear-gradient(234.57deg, rgba(201, 201, 201, 0.06) -22.36%, rgba(3, 51, 41, 0.6) 148.09%),
              linear-gradient(108.87deg, rgba(255, 255, 255, 0.8) 0.66%, rgba(211, 211, 211, 0.1) 99.48%)`,
        }}
      >
        <div className="flex flex-col gap-[2.4rem] justify-center h-full w-[90%] mx-auto">
          <h1 className="text-3xl lg:text-6xl md:text-4xl text-themeBlack font-bold">
            Ready to get <br className="hidden md:block" /> started?
          </h1>
          <p className="xl:w-3/4 md:text-xl text-base font-medium text-[#5E6473]">
            It only takes 3 minutes to download our app, sign up, and invest
          </p>

          <section className="flex items-center md:gap-4 gap-2">
            <div className="bg-themeBlack md:pl-3 text-white flex items-center justify-start gap-1 md:h-16 h-12 md:w-44 w-36 rounded-xl">
              <FaApple className="text-3xl md:text-4xl " />
              <p className="text-xs md:text-md">
                Download on the <br />
                <span className="md:text-[1.2rem] font-medium leading-0">
                  App Store
                </span>
              </p>
            </div>

            <div className="bg-themeBlack md:pl-3 text-white flex items-center justify-start gap-1 md:h-16 h-12 md:w-44 w-36 rounded-xl">
              <div>
                <img src={playstore.src} alt="phone" className="md:w-8 w-[1.9rem] md:pl-0 pl-2" />
              </div>
              <p className="text-xs md:text-md">
                GET IT ON <br />
                <span className="md:text-[1.2rem] font-medium leading-0">
                  Google Play
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="grid place-content-center p-4">
        <img src={bannervertical.src} alt="phone" className="max-w-full object-contain" />
      </div>
    </section>
  );
}

export default BannerVertical;
