import { FiUser } from "react-icons/fi";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane
} from "react-icons/fa";
import logo from "../../../../../public/portfolioImages/footerlogo.png";
import Link from "next/link";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // For smooth scrolling behavior
  });
}

function Footer() {
  return (
    <section className="bg-themeDarkGreen pt-11 pb-7 ">
        <div className="text-white grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
        xl:max-w-7xl lg:max-w-[62rem] md:max-w-[46rem] sm:max-w-[36rem] max-w-[19rem] mx-auto">
          <div  className="text-start  grid gap-3">
            <Link href="/page/home">
            <img src={logo} alt=""  className="img-fluid w-[152px]" />
            </Link>
            <p className="text-sm font-medium">Office 182, Level 1, Dammam Saudi Arabia</p>
            <p className="text-sm font-semibold">Connect with us</p>
            <p className="text-sm font-normal">contact@nuecapital.com</p>
            <div className="md:justify-between justify-center" >
              <div className="grid grid-cols-3">
                <div className="d-flex justify-between  mt-3">
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedinIn />
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
          <div  className="text-md-center text-start grid sm:gap-1 gap-3 mt-[20px]">
          <Link href="/page/home"  onClick={scrollToTop}>
            <p className="neu-head"> 
            NUECapital
            </p>
            </Link>
            <ul className="grid sm:gap-0 gap-3  sm:mt-[-41px] mt-0" >
            <Link href="/page/properties"  onClick={scrollToTop}>
              <li className="neu-list " >Properties</li>
              </Link>
              <Link href="/page/about"  onClick={scrollToTop}>
              <li className="neu-list">About</li>

              </Link>
                
              <Link href="/page/sell"  onClick={scrollToTop} >
              <li className="neu-list">Sell with NUE</li>
              </Link>
            </ul>

          </div>
          {/* <Col lg={2} md={3} className="text-md-start text-center">
            <p className="neu-head">Learn</p>
            <ul>
              <li className="neu-list">FAQs</li>
              <li className="neu-list">Glossary</li>
            </ul>
          </Col> */}
          <div  className="text-start grid mt-6">

            <p className="text-base font-medium">Join Our Newsletter Now</p>
            <p className="text-base font-normal sm:mb-0 mb-2">
              Register now to get updates on promotions...
            </p>
            <div className="items-center relative">
              <form action="#" className="flex items-center xl:w-[77%]">
                <div className="absolute ml-4 text-themeDarkGreen">
                  <FiUser className="text-[24px]" />
                </div>
                <input
                  type="text"
                  placeholder="E-mail Address"
                  className="form-control  pl-[38px] h-[54px] border-0 rounded-[8px] bg-[#F3F4F6]
                  placeholder:text-sm
                  "
                />
                <button className="btn absolute flex justify-center items-center 
                xl:ml-[285px] lg:ml-[292px] md:ml-[205px] sm:ml-[241px] ml-[254px]  border-0 rounded-[50%]
                text-white bg-themeDarkGreen px-2 py-2
                ">
                  <FaTelegramPlane className="send-icon" />
                </button>

              </form>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Footer;
