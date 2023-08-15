import { useState } from "react"
import {BsStarFill, BsStarHalf} from "react-icons/bs"
import { NavLink } from "react-router-dom"

const Recipies = () => {

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const Toggle = () => {
        setShow(!show);
    }
    const Toggle2 = () => {
        setShow2(!show2);
    }
    const Toggle3 = () => {
        setShow3(!show3);
    }

    const usdAmount = 500.00;

  return (
      <section style={{overflow: "hidden"}}>
            <div className="h-[100%] w-[100%] bg-recipehero bg-center bg-no-repeat bg-cover relative">
              <div className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex-col flex justify-center items-center md:pt-[100px] md:pb-[100px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <h1 className="text-[#fff] text-[60px] font-bold">Recipe Grid</h1>
                  <p className="text-[#fff] text-[30px] mt-[10px]">Home || Recipes</p>
            </div>
          </div>
          
          <div className="w-[100%] flex justify-center">
              <div className="w-[95%] flex h-[100%] mt-[65px] flex-wrap justify-between">
                <div className="w-[390px] h-[100%] rounded-lg mb-[30px] flex-col overflow-hidden shadow-md object-fit: cover relative">
                    <img
                        src="https://media.istockphoto.com/id/1009279168/photo/pasta-with-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=nV8FrAKQUWBhlFdnw-yQmuxRYACPRh6EXi0YHWvddC0="
                        alt=""
                        className="w-[100%] h-[250px] transition-transform duration-300 hover:scale-105"
                    />
                    
                    <div className="w-[100%] p-[12px] flex-col">
                        <div className="w-[100%] flex items-center justify-between">
                            <h3 className="text-[25px]">Spaghetti</h3>
                            <div className="flex items-center text-[gold]">
                                <BsStarFill/>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>

                        <div className="flex items-center mt-[5px]">
                            <p>₦1000</p>
                            <button onClick={Toggle} className="border border-third w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        {show ? (
                            <div className="absolute w-[160px] h-[150px] bg-white shadow-sm top-[150px] left-[100px] rounded-sm transition-transform duration-300 flex flex-col justify-center items-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">$ {usdAmount.toFixed(2)}</h2>
        <p className="text-sm text-gray-500">Total USD</p>
                        </div>
                        ) : null}

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <NavLink to="/recipe/:id">
                            <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                        </NavLink>
                    </div>
                </div>

                <div className="w-[390px] h-[100%] mb-[30px] rounded-lg flex-col overflow-hidden shadow-md object-fit: cover relative">
                    <img src="https://media.istockphoto.com/id/1265268905/photo/barbecue-chicken-jollof-rice.jpg?s=612x612&w=0&k=20&c=ohtrgIislco_-79g8I6AijYUJ2Yt923weh029-N7MUE=" alt="" className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105" />
                    
                    <div className="w-[100%] p-[12px] flex-col">
                        <div className="w-[100%] flex items-center justify-between">
                            <h3 className="text-[25px]">Ofada Rice</h3>
                            <div className="flex items-center text-[gold]">
                                <BsStarFill/>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>

                        <div className="flex items-center mt-[5px]">
                            <p>₦1500</p>
                            <button onClick={Toggle2} className="border border-third  w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        {show2 ? (
                            <div className="absolute w-[160px] h-[150px] bg-white shadow-sm top-[150px] left-[100px] rounded-sm transition-transform duration-300 flex flex-col justify-center items-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">$ {usdAmount.toFixed(2)}</h2>
                                <p className="text-sm text-gray-500">Total USD</p>
                        </div>
                        ) : null}

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                    </div>
                </div>

                <div className="w-[390px] h-[100%] mb-[30px] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
                    <img src="https://media.istockphoto.com/id/1398349816/photo/oha-soup.jpg?s=612x612&w=0&k=20&c=9IMVj6aGvW62S3R11KcTk5TptUaTq1gF-W0wWQtV3HA=" alt="" className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105" />
                    
                    <div className="w-[100%] p-[12px] flex-col">
                        <div className="w-[100%] flex items-center justify-between">
                            <h3 className="text-[25px]">Oha Soup</h3>
                            <div className="flex items-center text-[gold]">
                                <BsStarFill/>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>

                        <div className="flex items-center mt-[5px]">
                            <p>₦1800</p>
                            <button onClick={Toggle3} className="border border-third w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        {show3 ? (
                            <div className="absolute w-[160px] h-[150px] bg-white shadow-sm top-[150px] left-[100px] rounded-sm transition-transform duration-300 flex flex-col justify-center items-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">$ {usdAmount.toFixed(2)}</h2>
                                <p className="text-sm text-gray-500">Total USD</p>
                        </div>
                        ) : null}

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                    </div>
                </div>
                
                <div className="w-[390px] h-[100%] mb-[30px] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
                    <img src="https://media.istockphoto.com/id/1398349816/photo/oha-soup.jpg?s=612x612&w=0&k=20&c=9IMVj6aGvW62S3R11KcTk5TptUaTq1gF-W0wWQtV3HA=" alt="" className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105" />
                    
                    <div className="w-[100%] p-[12px] flex-col">
                        <div className="w-[100%] flex items-center justify-between">
                            <h3 className="text-[25px]">Oha Soup</h3>
                            <div className="flex items-center text-[gold]">
                                <BsStarFill/>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>

                        <div className="flex items-center mt-[5px]">
                            <p>₦1800</p>
                            <button onClick={Toggle3} className="border border-third w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        {show3 ? (
                            <div className="absolute w-[160px] h-[150px] bg-white shadow-sm top-[150px] left-[100px] rounded-sm transition-transform duration-300 flex flex-col justify-center items-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">$ {usdAmount.toFixed(2)}</h2>
                                <p className="text-sm text-gray-500">Total USD</p>
                        </div>
                        ) : null}

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                    </div>
                </div>

                  <div className="w-[390px] h-[100%] mb-[30px] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
                    <img src="https://media.istockphoto.com/id/1398349816/photo/oha-soup.jpg?s=612x612&w=0&k=20&c=9IMVj6aGvW62S3R11KcTk5TptUaTq1gF-W0wWQtV3HA=" alt="" className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105" />
                    
                    <div className="w-[100%] p-[12px] flex-col">
                        <div className="w-[100%] flex items-center justify-between">
                            <h3 className="text-[25px]">Oha Soup</h3>
                            <div className="flex items-center text-[gold]">
                                <BsStarFill/>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>

                        <div className="flex items-center mt-[5px]">
                            <p>₦1800</p>
                            <button onClick={Toggle3} className="border border-third w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        {show3 ? (
                            <div className="absolute w-[160px] h-[150px] bg-white shadow-sm top-[150px] left-[100px] rounded-sm transition-transform duration-300 flex flex-col justify-center items-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">$ {usdAmount.toFixed(2)}</h2>
                                <p className="text-sm text-gray-500">Total USD</p>
                        </div>
                        ) : null}

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                    </div>
                  </div>
                  
                  <div className="w-[390px] h-[100%] mb-[30px] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
                    <img src="https://media.istockphoto.com/id/1398349816/photo/oha-soup.jpg?s=612x612&w=0&k=20&c=9IMVj6aGvW62S3R11KcTk5TptUaTq1gF-W0wWQtV3HA=" alt="" className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105" />
                    
                    <div className="w-[100%] p-[12px] flex-col">
                        <div className="w-[100%] flex items-center justify-between">
                            <h3 className="text-[25px]">Oha Soup</h3>
                            <div className="flex items-center text-[gold]">
                                <BsStarFill/>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>

                        <div className="flex items-center mt-[5px]">
                            <p>₦1800</p>
                            <button onClick={Toggle3} className="border border-third w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        {show3 ? (
                            <div className="absolute w-[160px] h-[150px] bg-white shadow-sm top-[150px] left-[100px] rounded-sm transition-transform duration-300 flex flex-col justify-center items-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">$ {usdAmount.toFixed(2)}</h2>
                                <p className="text-sm text-gray-500">Total USD</p>
                        </div>
                        ) : null}

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                    </div>
                </div>
            </div>
          </div>
      </section>
  )
}

export default Recipies