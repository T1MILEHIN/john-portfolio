import color from "../assets/images/EXP/color.jpg"

const Experience = () => {
  return (
    <div className="md:px-20 md:pb-40 pt-32 p-4 bg-bodybg">
        <div className="">
            <h1 className="specify-conlight leading-[60px] lg:leading-[100px] text-4xl lg:text-[70px] w-full lg:w-[819px]"><b>5</b> Years Background Experience in Designing</h1>
        </div>

        <div className="relative text-right mx-auto mt-20 md:py-0">
            <button className="absolute right-20 top-1/2 -translate-y-1/2 z-10 button rounded-[40px] bg-blue text-white w-fit">Get In Touch</button>
            <hr className="z-[2] w-full border-[#636363]"></hr>
        </div>

        <div className="py-48">
            <h1 className="text-[40px] font-medium"></h1>
            <div className="flex md:flex-row flex-col md:items-center gap-10 border border-b-[#636363]">
                <div className="flex-1 flex flex-col gap-4">
                    <div className="font-bold text-[15px] flex flex-col md:gap-2 gap-4">
                        <p>2023- 2023</p>
                        <p>UI/UX DESIGNER INTERN</p>
                        <p>COLORFI, NEWYORK USA.</p>
                    </div>
                    <p className="text-[15px] md:w-[464px] md:leading-10 leading-[40px]">As a UI/UX intern in Colorfi, i assists in user interface and experience design, contributing to projects, learning design principles, and gaining practical experience.</p>
                </div>
                <img src={color} className="lg:w-[385px] object-cover " alt="" />
            </div>
        </div>
    </div>
  )
}

export default Experience