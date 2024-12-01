import tesOne from "../assets/images/footer-img2.svg";
// import footerImg from "../assets/images/footer-img.jpg";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="md:px-20 px-4 bg-darkbg text-white">
            <div className="md:pt-20 p-2">
                <div className="flex md:flex-nowrap flex-wrap">
                    <img src={tesOne} alt="" className="w-52" />
                    <h1 className="specify-light2 tracking-wide md:w-[476px] w-full font-medium text-5xl md:text-6xl text-text_gray">Let&apos;s Work Together</h1>
                </div>
            </div>

            <div className="relative text-right mb-20 md:my-0">
                <button className="absolute md:right-20 right-10 top-1/2 -translate-y-1/2 z-10 button rounded-[40px] bg-blue text-white">Get In Touch</button>
                <hr className="z-[2] w-full"></hr>
            </div>

            <div className="flex gap-4 mt-20 px-2 md:px-0">
                <Button className="border border-text_gray text-text_gray text-[10px] bg-transparent rounded-[35px] md:py-7 px-6">oluwawolejohnbelovedayomide2@gmail.com</Button>
                <Button className="border border-text_gray text-text_gray text-[10px] bg-transparent rounded-[35px] md:py-7 px-6">+234 9063 606 002</Button>
            </div>

            <div>
                <div className="px-2 md:pt-20 md:pb-10 pt-10 pb-5">
                    <h1 className="font-bold text-[#636363]">SOCIALS</h1>
                    <div className="flex justify-between text-xs ">
                        <ul className="flex md:gap-10 gap-4">
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