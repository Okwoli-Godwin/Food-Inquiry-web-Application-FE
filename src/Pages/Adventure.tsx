import { NavLink } from "react-router-dom"



const Adventure = () => {
    return (
        <div className="w-[100%] h-[100%] bg-[red] bg-venture bg-no-repeat bg-center bg-cover bg-fixed">
            <div className="w-[100%] h-[100%] flex flex-col pl-[50px] pt-[150px] pb-[150px] md:pl-0 md:items-center sm:pl-0 sm:pt-[100px] sm:pb-[100px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <h3 className="text-[#fff] text-[25px] font-semibold sm:text-[20px]">Our Restaurant</h3>
                <h1 className="text-[#fff] text-[50px] font-semibold mt-[15px] sm:text-[30px] md:text-[40px] md:text-center md:leading-tight">Delicious food with meaning</h1>
                <p className="text-[#fff] w-[350px] mt-[15px] text-[17px] md:text-center sm:w-[270px]">
                    On a cold winter night, brighten up your table with a big, colorful mix of Recipies.
                </p>

                <NavLink to="/search-restaurants">
                    <button className="w-[230px] h-[50px] mt-[20px] text-[#fff] bg-third rounded flex justify-center items-center">View Restaurants</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Adventure