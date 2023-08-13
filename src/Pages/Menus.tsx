import {BsStarFill, BsStarHalf} from "react-icons/bs"

const Menus = () => {
    return (
    <div className="w-[100%] flex h-[100%] flex-col pt-[50px] items-center">
        <h3 className="text-[40px]">Our Menu's</h3>
        
            <div className="w-[95%] flex h-[100%] mt-[35px] flex-wrap justify-between">
                <div className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit: cover">
                    <img src="https://media.istockphoto.com/id/1009279168/photo/pasta-with-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=nV8FrAKQUWBhlFdnw-yQmuxRYACPRh6EXi0YHWvddC0=" alt="" className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105" />
                    
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
                            <button className="bg-[gold] text-[#fff] w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <button className="w-[100%] h-[40px] bg-[gold] text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                    </div>
                </div>

                <div className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit: cover">
                    <img src="https://media.istockphoto.com/id/1009279168/photo/pasta-with-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=nV8FrAKQUWBhlFdnw-yQmuxRYACPRh6EXi0YHWvddC0=" alt="" className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105" />
                    
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
                            <button className="bg-[gold] text-[#fff] w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <button className="w-[100%] h-[40px] bg-[gold] text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                    </div>
                </div>

                <div className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover ">
                    <img src="https://media.istockphoto.com/id/1009279168/photo/pasta-with-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=nV8FrAKQUWBhlFdnw-yQmuxRYACPRh6EXi0YHWvddC0=" alt="" className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105" />
                    
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
                            <button className="bg-[gold] text-[#fff] w-[170px] h-[40px] rounded ml-[12px]">Click to see USD price</button>
                        </div>

                        <p className="mt-[5px]">Calories: 80% carbs</p>

                        <button className="w-[100%] h-[40px] bg-[gold] text-[#fff] cursor-pointer rounded mt-[20px]">View Recipies</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Menus