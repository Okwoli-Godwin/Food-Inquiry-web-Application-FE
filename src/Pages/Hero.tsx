import {CiSearch} from "react-icons/ci"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {

    const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true
  };
  return (
      <section style={{overflow: "hidden"}}>
        <Slider {...settings}>
            <div className="h-[100%] w-[100%] bg-hero bg-center bg-no-repeat bg-cover relative">
              <div className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex justify-center items-center md:pt-[100px] md:pb-[100px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  
                  <div className="w-[95%] flex-col items-center flex md:mt-[13px]">
                <h3 className="font-great-vibes text-[60px] p-0 text-[#F4A01B] md:text-[30px]">Welcome</h3>
                <h2 className="text-[#fff] text-[47px] font-bold mt-[12px] sm:text-sm md:text-[32px]">HIGH QUALITY MEALS</h2>
                <p className="text-[#b9b9b9] text-[20px] w-[650px] text-center mt-[12px] md:text-[16px] md:w-[350px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                
                <div className="w-[600px] md:w-[350px] h-[60px] md:h-[50px] flex bg-[#fff] mt-[23px] rounded-full items-center overflow-hidden ">
                    <div className="w-[10%] md:w-[15%] h-[100%] flex justify-center items-center">
                        <div className="text-[24px]">
                            <CiSearch />
                        </div>
                    </div>
                    {/* <input type="text" className="flex-1 h-[100%] border-none outline-none" placeholder="Search recipes......"/> */}
                </div>
            </div>
            </div>
              </div>
              
              <div className="h-[100%] w-[100%] bg-hero2 bg-center bg-no-repeat bg-cover relative">
              <div className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex justify-center items-center md:pt-[100px] md:pb-[100px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  
                  <div className="w-[95%] flex-col items-center flex md:mt-[13px]">
                <h3 className="font-great-vibes text-[60px] p-0 text-[#F4A01B] md:text-[30px]">Welcome</h3>
                <h2 className="text-[#fff] text-[47px] font-bold mt-[12px] sm:text-sm md:text-[32px]">HIGH QUALITY MEALS</h2>
                <p className="text-[#b9b9b9] text-[20px] w-[650px] text-center mt-[12px] md:text-[16px] md:w-[350px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                
                <div className="w-[600px] md:w-[350px] h-[60px] md:h-[50px] flex bg-[#fff] mt-[23px] rounded-full items-center overflow-hidden ">
                    <div className="w-[10%] md:w-[15%] h-[100%] flex justify-center items-center">
                        <div className="text-[24px]">
                            <CiSearch />
                        </div>
                    </div>
                    <input  className="flex-1 h-[100%] border-none outline-none" placeholder="Search recipes......"/>
                </div>
            </div>
            </div>
              </div>
            
              <div className="h-[100%] w-[100%] bg-hero3 bg-center bg-no-repeat bg-cover relative">
              <div className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex justify-center items-center md:pt-[100px] md:pb-[100px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  
                  <div className="w-[95%] flex-col items-center flex md:mt-[13px]">
                <h3 className="font-great-vibes text-[60px] p-0 text-[#F4A01B] md:text-[30px]">Welcome</h3>
                <h2 className="text-[#fff] text-[47px] font-bold mt-[12px] sm:text-sm md:text-[32px]">HIGH QUALITY MEALS</h2>
                <p className="text-[#b9b9b9] text-[20px] w-[650px] text-center mt-[12px] md:text-[16px] md:w-[350px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                
                <div className="w-[600px] md:w-[350px] h-[60px] md:h-[50px] flex bg-[#fff] mt-[23px] rounded-full items-center overflow-hidden ">
                    <div className="w-[10%] md:w-[15%] h-[100%] flex justify-center items-center">
                        <div className="text-[24px]">
                            <CiSearch />
                        </div>
                    </div>
                    <input type="text" className="flex-1 h-[100%] border-none outline-none" placeholder="Search recipes......"/>
                </div>
            </div>
            </div>
              </div>
        </Slider>
      </section>
  )
}

export default Hero