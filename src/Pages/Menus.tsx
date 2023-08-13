import {BsStarFill} from "react-icons/bs"

const Menus = () => {
    return (
    <div className="w-[100%] flex h-[100%] flex-col pt-[50px] items-center">
        <h3 className="text-[40px]">Our Menu's</h3>
        
            <div className="w-[95%] flex h-[100%] mt-[35px] flex-wrap">
                <div className="w-[360px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit: cover">
                    <img src="https://media.istockphoto.com/id/1009279168/photo/pasta-with-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=nV8FrAKQUWBhlFdnw-yQmuxRYACPRh6EXi0YHWvddC0=" alt="" className="w-[100%] h-[230px] bg-[red]" />
                    
                    <div className="w-[100%] p-[12px] flex-col">
                        <div className="w-[100%] flex items-center">
                            <h3 className="text-[25px]">Spaghetti</h3>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Menus