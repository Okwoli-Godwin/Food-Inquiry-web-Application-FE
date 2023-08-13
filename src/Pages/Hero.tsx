import {CiSearch} from "react-icons/ci"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  return (
      <section>
        <div className="h-[100%] w-full bg-[red] bg-hero bg-center bg-no-repeat bg-cover relative">
              <div className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  
                  <div className="w-[95%] flex-col items-center flex">
                <h3 className="font-great-vibes text-[60px] p-0 text-[#F4A01B]">Welcome</h3>
                <h2 className="text-[#fff] text-[47px] font-bold mt-[12px]">HIGHT QUALITY MEALS</h2>
                <p className="text-[#b9b9b9] text-[20px] w-[650px] text-center mt-[12px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                
                <div className="w-[600px] h-[60px] flex bg-[#fff] mt-[23px] rounded-full items-center overflow-hidden">
                    <div className="w-[10%] h-[100%] flex justify-center items-center">
                        <div className="text-[24px]">
                            <CiSearch />
                        </div>
                    </div>
                    <input type="text" className="flex-1 h-[100%] border-none outline-none" placeholder="Search recipes......"/>
                </div>
            </div>
            </div>
          {/* <div className="flex justify-center items-center absolute w-[100%] h-[100%] left-0 top-0 right-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            
            <div className="w-[95%] flex-col items-center flex">
                <h3 className="font-great-vibes text-[60px] p-0 text-[#F4A01B]">Welcome</h3>
                <h2 className="text-[#fff] text-[47px] font-bold mt-[12px]">HIGHT QUALITY MEALS</h2>
                <p className="text-[#b9b9b9] text-[20px] w-[650px] text-center mt-[12px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                
                <div className="w-[600px] h-[60px] flex bg-[#fff] mt-[23px] rounded-full items-center overflow-hidden">
                    <div className="w-[10%] h-[100%] flex justify-center items-center">
                        <div className="text-[24px]">
                            <CiSearch />
                        </div>
                    </div>
                    <input type="text" className="flex-1 h-[100%] border-none outline-none" placeholder="Search recipes......"/>
                </div>
            </div>
          </div> */}
        </div>
      </section>
  )
}

export default Hero