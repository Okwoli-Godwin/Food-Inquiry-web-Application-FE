import { BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import {MdLocationPin} from "react-icons/md"

const Contact = () => {


  return (
      <section style={{overflow: "hidden"}}>
            <div className="h-[100%] w-[100%] bg-recipehero bg-center bg-no-repeat bg-cover relative">
              <div className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex-col flex justify-center items-center md:pt-[100px] md:pb-[100px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <h1 className="text-[#fff] text-[60px] font-bold">Contact Us</h1>
                  <p className="text-[#fff] text-[30px] mt-[10px]">Home || Contact us</p>
            </div>
          </div>
          
          <div className="w-[100%] flex justify-center items-center h-[100%] mt-[30px]">
              <div className="w-[200px] h-[100%] bg-third rounded p-[20px] flex-col ml-[25px]">
                  <div className="text-[#fff]"><BsTelephoneFill /></div>
                  <h3 className="text-[#fff] text-[20px] font-semibold mt-[22px]">Phone us</h3>
                  <p className="text-[#fff] mt-[7px]">+0123 (456) 789</p>
              </div>

              <div className="w-[200px] h-[100%] bg-third rounded p-[20px] flex-col ml-[25px]">
                  <div className="text-[#fff] text-[28px]"><MdEmail /></div>
                  <h3 className="text-[#fff] text-[20px] font-semibold mt-[22px]">Email us</h3>
                  <p className="text-[#fff] mt-[7px]">support@gmail.com</p>
              </div>

              <div className="w-[200px] h-[100%] bg-third rounded p-[20px] flex-col ml-[25px]">
                  <div className="text-[#fff]"><MdLocationPin /></div>
                  <h3 className="text-[#fff] text-[20px] font-semibold mt-[22px]">Location</h3>
                  <p className="text-[#fff] mt-[7px]">25 main road, Lagos</p>
              </div>
          </div>
      </section>
  )
}

export default Contact