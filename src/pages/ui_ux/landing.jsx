import { useState } from "react";
import {
    Table,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@/components/ui/table";
import IconCloud from "@/components/ui/icon-cloud";
import Work from "./components/work";
import tesOne from "../../assets/images/profile.png"
import Footer from "../../components/footer";
import LandingProfile from "../../components/landingProfile";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollSlide from "./components/scrollSlide";
import HoverEffect from "../../components/custom/hoverEffect";
import { Parallax } from 'react-scroll-parallax';

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];


const Landing = () => {
    const [selected, setSelected] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dir, setDir] = useState(null);
    const handleSetSelected = (val) => {
        if (typeof val === "number" && typeof selected === "number") {
            setDir(selected > val ? "u" : "d");
            setCurrentSlide(prev => selected > val && dir === "d" ? prev + 1 : dir === "u" && prev - 1)
        } else if (val === null) {
            setDir(null);
            // setCurrentSlide(0)
        }
        setSelected(val);
    };
    const testimonialRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: testimonialRef,
        offset: ["start start", "center center"]
    })
    return (
        <div>
            <div className="px-2 md:px-20 md:pt-36 relative">
                <LandingProfile />
            </div>
            <div className="lg:px-20 px-2">
                <div className="lg::p-20 px-2 py-10">
                    <div className="flex lg:flex-row flex-col md:gap-14 gap-20 items-center">
                        <div className="leading-[30px] text-base lg:w-[617px]">
                            <p>Hi, i&apos;m <b>Johnbeloved</b>, a passionate Product designer dedicated to crafting user-centered solutions that drive engagement and success. With a keen eye for detail and a passion for innovation, I create intuitive interfaces that simplify complex interactions and elevate brand experiences.</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Creating user-friendly experiences that spark joy</h3>
                        </div>
                    </div>
                    <Parallax translateY={[20, -20]}>
                        <HoverEffect Z={100} rotationRange={20} style={{ width: "fit-content", marginLeft: "auto" }}>
                            <div
                                className="mt-5 ml-auto button black_hover rounded-[40px] bg-black text-white w-fit">
                                <HoverEffect Z={100} rotationRange={30} style={{ width: "fit-content" }}>
                                    <div className="button">About Me</div>
                                </HoverEffect>
                            </div>
                        </HoverEffect>
                    </Parallax>
                </div>
                <hr className="border-[#636363]" />
                <div className="sm:p-2 lg:py-28 py-10 p-2 flex flex-col gap-48 overflow-hidden">
                    <h1 className="mx-auto lg:w-[1023px] font-medium">RECENT WORKS</h1>
                    <div className="">
                        <Table className="overflow-hidden">
                            <TableHeader>
                                <TableRow className="border-b border-[#636363]">
                                    <TableHead className="md:min-w-[400px] w-fit">CLIENT</TableHead>
                                    <TableHead>LOCATION</TableHead>
                                    <TableHead>SERVICES</TableHead>
                                </TableRow>
                            </TableHeader>
                            <Work
                                dir={dir}
                                setDir={setDir}
                                currentSlide={currentSlide}
                                setCurrentSlide={setCurrentSlide}
                                selected={selected}
                                setSelected={setSelected}
                                handleSetSelected={handleSetSelected} />
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={2}></TableCell>
                                    <TableCell className="text-right p-10">
                                        <Parallax translateY={[20, -20]}>
                                            <HoverEffect Z={100} rotationRange={20} style={{ width: "fit-content", marginLeft: "auto" }}>
                                                <div className="ml-auto button black_hover rounded-[40px] bg-black text-white">
                                                    <HoverEffect Z={100} rotationRange={30} style={{ width: "fit-content" }}>
                                                        <div className="button">More Works</div>
                                                    </HoverEffect>
                                                </div>
                                            </HoverEffect>
                                        </Parallax>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>

                </div>
            </div>
            <ScrollSlide />
            <div>
                <div className="text-center md:pt-10">
                    <h1 className="font-bold">SoftWares</h1>
                    <p>Here are the softwares i’m proficient in</p>
                </div>
                <div className="relative flex size-full mx-auto max-w-3xl items-center justify-center overflow-hidden bg-background">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>

            <div className="relative z-[999999999] bg-bodybg">
                <div className="text-center py-10">
                    <h1 className="font-bold">Testimonials</h1>
                </div>
                <motion.div ref={testimonialRef} className="flex justify-center items-center flex-wrap md:flex-nowrap gap-10 md:p-20 p-2">
                    <motion.div>
                        <p className="text-[#C6C3C3] font-bold text-2xl">01</p>
                        <div className="py-6 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-7 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                    <motion.div className="origin-center bg-bodybg">
                        <p className="text-[#C6C3C3] font-bold text-2xl">02</p>
                        <div className="py-6 border-t-2 border-b border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-7 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                    <motion.div>
                        <p className="text-[#C6C3C3] font-bold text-2xl">03</p>
                        <div className="py-6 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-darkbg leading-7 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <Parallax translateY={[-40, 42]} speed={-5} className="origin-bottom">
                <Footer />
            </Parallax>
        </div>
    )
}

export default Landing