

const Hero = () => {
  return (
      <section>
        <div className="h-[100vh] w-full bg-[red] bg-hero bg-center bg-no-repeat bg-cover relative">
          <div className="flex justify-center items-center absolute w-[100%] h-[100%] left-0 top-0 right-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            
            <div className="w-[95%] h-[300px] border-[#fff] border-b border-r border-l flex-col items-center flex">
                <h3 className="font-great-vibes text-[60px] p-0 text-[#F4A01B]">Welcome</h3>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero