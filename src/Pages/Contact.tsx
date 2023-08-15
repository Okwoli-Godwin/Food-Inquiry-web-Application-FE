import { BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { MdLocationPin } from "react-icons/md"
import img from "../assets/map.png"

const Contact = () => {


  return (
      <section style={{overflow: "hidden"}}>
            <div className="h-[100%] w-[100%] bg-recipehero bg-center bg-no-repeat bg-cover relative">
              <div className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex-col flex justify-center items-center md:pt-[200px] md:pb-[100px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <h1 className="text-[#fff] text-[60px] font-bold md:text-[40px]">Contact Us</h1>
                  <p className="text-[#fff] text-[30px] mt-[10px] md:text-[25px]">Home || Contact us</p>
            </div>
          </div>
          
          <div className="w-[100%] flex justify-center items-center h-[100%] mt-[30px] flex-wrap">
              <div className="w-[200px] h-[100%] bg-third rounded p-[20px] flex-col ml-[25px] md:mb-[15px]">
                  <div className="text-[#fff]"><BsTelephoneFill /></div>
                  <h3 className="text-[#fff] text-[20px] font-semibold mt-[22px]">Phone us</h3>
                  <p className="text-[#fff] mt-[7px]">+0123 (456) 789</p>
              </div>

              <div className="w-[200px] h-[100%] bg-third rounded p-[20px] flex-col ml-[25px] md:mb-[15px]">
                  <div className="text-[#fff] text-[28px]"><MdEmail /></div>
                  <h3 className="text-[#fff] text-[20px] font-semibold mt-[22px]">Email us</h3>
                  <p className="text-[#fff] mt-[7px]">support@gmail.com</p>
              </div>

              <div className="w-[200px] h-[100%] bg-third rounded p-[20px] flex-col ml-[25px] md:mb-[15px]">
                  <div className="text-[#fff]"><MdLocationPin /></div>
                  <h3 className="text-[#fff] text-[20px] font-semibold mt-[22px]">Location</h3>
                  <p className="text-[#fff] mt-[7px]">25 main road, Lagos</p>
              </div>
          </div>

          <div className="w-[100%] flex justify-center mt-[70px]">
              <div className="w-[70%] flex flex-wrap">
              <div className="w-[48%] lg:w-[100%] lg:justify-center">
                  <img src={img} alt="" />
              </div>
              
              <div className="w-[48%] flex flex-col lg:w-[100%] lg:mt-[25px]">
                <h3 className="text-[26px] font-semibold">Send Us Message</h3>
                <input 
                    type="text" 
                    placeholder="Full name" 
                    className="border border-gray-500 h-[45px] pl-[15px] rounded outline-none mt-[27px]"
                />
                
                <input 
                    type="email" 
                    placeholder="Email address" 
                    className="border border-gray-500 h-[45px] pl-[15px] rounded outline-none mt-[17px]"
                />
                
                <textarea 
                    placeholder="Write Message"
                    className="p-[12px] rounded h-[130px] border border-gray-500 outline-none mt-[17px] resize-none"
                > 
                </textarea>
                
                <button className="w-[160px] h-[45px] flex justify-center rounded items-center text-[#fff] bg-third mt-[17px]">Send comments</button>
              </div>
          </div>
          </div>
      </section>
  )
}

export default Contact