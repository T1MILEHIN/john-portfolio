import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
    Table,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@/components/ui/table";
import IconCloud from "@/components/ui/icon-cloud";
import Work from "./work";
import tesOne from "../../assets/images/profile.png"
import Footer from "../../components/footer";

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
    const [dir, setDir] = useState(null);
    const targetRef = useRef(null);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "d" : "u");
        } else if (val === null) {
            setDir(null);
        }

        setSelected(val);
    };

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    const xReverse = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
    })

    return (
        <div>
            <div className="md:px-20 px-2">
                <div className="md:p-20 px-2 py-10">
                    <div className="flex md:flex-row flex-col md:gap-10 gap-20 items-center">
                        <div className="flex-1 leading-[40px]">
                            <p>Hi, i&apos;m Johnbeloved, a passionate Product designer dedicated to crafting user-centered solutions that drive engagement and success. With a keen eye for detail and a passion for innovation, I create intuitive interfaces that simplify complex interactions and elevate brand experiences.</p>
                        </div>
                        <div>
                            <h3 className="font-medium md:font-bold">Creating user-friendly experiences that spark joy</h3>
                        </div>
                    </div>
                    <div className="mt-5 ml-auto p-10 rounded-[40px] bg-black text-white w-fit">About Me</div>
                </div>
                <hr className="border-[#636363]" />
                <div className="md:p-20 py-10 p-2 flex flex-col gap-20">
                    <h1>RECENT WORKS</h1>
                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow className="border-b border-[#636363]">
                                    <TableHead className="md:min-w-[400px] w-fit">CLIENT</TableHead>
                                    <TableHead>LOCATION</TableHead>
                                    <TableHead>SERVICES</TableHead>
                                </TableRow>
                            </TableHeader>
                            <Work dir={dir} selected={selected} handleSetSelected={handleSetSelected} />
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={2}></TableCell>
                                    <TableCell className="text-right">
                                        <div className="ml-auto p-10 rounded-[40px] bg-black text-white w-fit">More Works</div>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>

                </div>
            </div>


            <div ref={targetRef} className="relative h-[400vh] py-[30vh]">
                <div className="sticky top-0 right-0 left-0 overflow-hidden flex items-center h-screen">
                    <div className="flex flex-col gap-10">
                        <motion.div style={{ x }} className="flex gap-5">
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                        </motion.div>
                        <motion.div style={{ x: xReverse }} className="flex gap-5">
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                            <div className="w-[400px] h-[400px] aspect-square bg-black"></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center md:pt-10">
                    <h1 className="font-bold">SoftWares</h1>
                    <p>Here are the softwares i’m proficient in</p>
                </div>
                <div className="relative flex size-full mx-auto max-w-3xl items-center justify-center overflow-hidden bg-background">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>

            <div>
                <div className="text-center py-10">
                    <h1 className="font-bold">Testimonials</h1>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-10 md:p-20 p-2">
                    <div>
                        <p className="text-[#C6C3C3]">01</p>
                        <div className="py-6 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-[#0B0B0B] leading-9 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#C6C3C3]">02</p>
                        <div className="py-6 border-t-2 border-b border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-[#0B0B0B] leading-9 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#C6C3C3]">03</p>
                        <div className="py-6 border-y-2 border-[#C6C3C3] flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <img src={tesOne} alt="" className="w-10" />
                                <div className="text-sm">
                                    <p>John Doe</p>
                                    <p className="text-[#636363]">CEO, XYZ Corporation</p>
                                </div>
                            </div>
                            <p className="text-[#0B0B0B] leading-9 text-xs">Johnbeloved transformed our interface into a visually stunning experience. Their attention to detail and understanding of our brand made the collaboration seamless. Highly recommended!</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Landing