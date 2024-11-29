import { useState } from "react";
import logo from "../assets/images/logo2.png";
import { IoReorderTwo } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const menuContainerVariant = {
    initial: {
        x: "calc(100% + 100px)"
    },
    animate: {
        x: 0,
        transition: {
            duration: 0.8, ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        x: "calc(100% + 100px)",
        transition: {
            duration: 0.8, ease: [0.76, 0, 0.24, 1]
        }
    }
}

const liVariants = {
    initial: {
        x: "80px"
    },
    animate: (i) => ({
        x: 0,
        transition: {
            duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i
        }
    }),
    exit: (i) => ({
        x: "80px",
        transition: {
            duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i
        }
    })
}

const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
const finalPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

const svgVariants = {
    initial: { d: initialPath },
    animate : { 
        d: finalPath,
        transition: {
            duration: 1, ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: { 
        d: initialPath,
        transition: {
            duration: 1, ease: [0.76, 0, 0.24, 1]
        }
    }
}

const NavBar = () => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(false);
    return (
        <header className={`fixed w-full top-0 right-0 flex justify-between items-center md:p-8 p-4 ${pathname === "/contact" ? "bg-darkbg" : "bg-bodybg"}`}>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <AnimatePresence>
                {(pathname === "/" || pathname === "/graphics") &&
                <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0, transition: {type: "spring", stiffness: 200}}} exit={{opacity: 0, y: -100}}>
                    <nav className="flex items-center font-medium text-sm *:duration-300">
                        <NavLink to="/" className={({ isActive }) => isActive ? "after:origin-left after:ml-auto after:left-0 after:duration-300 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-navactive after:z-[-1] after:w-full text-white rounded-tl-[5px] rounded-bl-[5px]" : "after:origin-left after:duration-300 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-transparent after:w-0 bg-nav rounded-tl-[5px] rounded-bl-[5px] transition-all"}>
                            <p className="px-6 py-3 uppercase">UI/UX</p>
                        </NavLink>
                        <NavLink to="/graphics" className={({ isActive }) => isActive ? "ml-auto after:duration-300 relative z-[1] overflow-hidden after:absolute after:inset-0 after:bg-navactive after:z-[-1] after:w-full text-white rounded-tr-[5px] rounded-br-[5px]" : "ml-auto after:duration-300 relative z-[1] overflow-hidden after:absolute after:inset-0 after:bg-transparent after:w-0 bg-nav rounded-tr-[5px] rounded-br-[5px] transition-all"}>
                            <p className="px-6 py-3 uppercase">Graphics</p>
                        </NavLink>
                    </nav>
                </motion.div>}
            </AnimatePresence>
            <div className="z-20 overflow-hidden bg-[#282828] w-20 aspect-square rounded-full grid place-content-center cursor-pointer duration-200">
                <div className={`blue_hover grid place-content-center w-20 h-20 rounded-full`} onClick={() => setIsActive(true)}>
                    <IoReorderTwo size={40} color="white" className="" />
                </div>
                <AnimatePresence>
                    <motion.div
                        variants={menuContainerVariant}
                        initial="initial"
                        animate={isActive ? "animate" : "exit"}
                        exit="exit"
                        className="flex flex-col justify-between py-10 px-20 fixed top-0 bottom-0 right-0 md:w-1/2 w-full  bg-[#282828] text-white z-30">
                        <div className="ml-auto grid place-content-center w-20 h-20 rounded-full text-white bg-blue" onClick={() => setIsActive(false)}>
                            <FaXmark size={40} color="white" />
                        </div>
                        <div>
                            <p className="p-4 text-[#4d4d4d] border-b border-[#727272]">Navigation</p>
                            <ul className="leading-[80px] text-4xl">
                                <motion.li className="hover:text-blue duration-300 w-fit" onClick={()=> setIsActive(false)} to="/" custom={1} variants={liVariants}>
                                    <NavLink className={({isActive})=> isActive && "text-blue"} to="/">Home</NavLink>
                                </motion.li>
                                <motion.li className="hover:text-blue duration-300 w-fit"  onClick={()=> setIsActive(false)} custom={2} variants={liVariants}>
                                    <NavLink className={({isActive})=> isActive && "text-blue"} to="/about">About</NavLink>
                                </motion.li>
                                <motion.li className="hover:text-blue duration-300 w-fit"  onClick={()=> setIsActive(false)} custom={3} variants={liVariants}>
                                    <NavLink className={({isActive})=> isActive && "text-blue"} to="/contact">Contact</NavLink>
                                </motion.li>
                                <motion.li className="hover:text-blue duration-300 w-fit"  onClick={()=> setIsActive(false)} custom={4} variants={liVariants}>
                                    <NavLink className={({isActive})=> isActive && "text-blue"} to="/case">Case Studies</NavLink>
                                </motion.li>
                                <motion.li className="hover:text-blue duration-300 w-fit"  onClick={()=> setIsActive(false)} custom={5} variants={liVariants}>
                                    <NavLink className={({isActive})=> isActive && "text-blue"} to="/experience">Experience</NavLink>
                                </motion.li>
                            
                            </ul>
                        </div>
                        <svg className="absolute top-0 -left-24 w-[100px] h-full stroke-none fill-[#282828]" >
                            <motion.path variants={svgVariants}></motion.path>
                        </svg>
                    </motion.div>
                </AnimatePresence>
            </div>
        </header>
    )
}

export default NavBar