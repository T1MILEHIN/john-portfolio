import tesOne from "../assets/images/profile.png";
// import footerImg from "../assets/images/footer-img.jpg";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="md:px-20 bg-[#0B0B0B] text-white">
            <div className="md:py-20 p-2">
                <div className="flex items-end">
                    <img src={tesOne} alt="" className="w-52" />
                    <h1 className="md:w-[476px] font-medium text-6xl text-[#D9D9D9]">Let&apos;s Work Together</h1>
                </div>
            </div>

            <div className="relative text-right mx-auto">
                <button className="absolute right-20 top-1/2 -translate-y-1/2 z-10 py-12 px-5 rounded-[40px] bg-[#407BFF] text-white w-fit">Get In Touch</button>
                <hr className="z-[2] w-full"></hr>
            </div>

            <div className="flex gap-4 mt-20">
                <Button className="border border-[#D9D9D9] text-[#D9D9D9] text-[10px] bg-transparent rounded-[35px] md:py-7 px-6">oluwawolejohnbelovedayomide2@gmail.com</Button>
                <Button className="border border-[#D9D9D9] text-[#D9D9D9] text-[10px] bg-transparent rounded-[35px] md:py-7 px-6">+234 9063 606 002</Button>
            </div>

            <div>
                <div className="md:pt-20 md:pb-10">
                    <h1 className="font-bold text-[#636363]">SOCIALS</h1>
                    <div className="flex justify-between text-xs ">
                        <ul className="flex gap-10">
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Behance</li>
                        </ul>
                        <ul>
                            <li>DESIGNED BY JOHNBELOVED</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer