import { useState } from "react";
import logo from "../assets/images/logo3-removebg.png";
import darklogo from "../assets/images/darklogo-removebg.png";
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
    const handleToggle = (e)=> {
        setIsActive(e.target.checked)
    }
    return (
        <header className={`z-[9999999999999] fixed w-full top-0 right-0 flex justify-between items-center md:p-8 p-4 ${pathname === "/contact" ? "bg-darkbg" : "bg-transparent"}`}>
            <Link to="/">
                <img src={pathname === "/contact" ? darklogo : logo} className="lg:w-[96px] w-[150px]" alt="" />
            </Link>
            <AnimatePresence>
                {(pathname === "/" || pathname === "/graphics") &&
                <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0, transition: {type: "spring", stiffness: 200}}} exit={{opacity: 0, y: -100}}>
                    <nav className="flex items-center font-medium text-sm *:duration-300">
                        <NavLink to="/" className={({ isActive }) => isActive ? "rounded-[5px] after:origin-left after:ml-auto after:left-0 after:duration-300 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-navactive after:z-[-1] after:w-full text-white rounded-tl-[5px] rounded-bl-[5px]" : "backdrop-blur-sm after:origin-left after:duration-300 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-transparent after:w-0 bg-nav rounded-tl-[5px] rounded-bl-[5px] transition-all"}>
                            <p className="px-6 py-3 uppercase w-[86px] font-medium text-[9.63px] grid place-content-center tracking-wider">UI/UX</p>
                        </NavLink>
                        <NavLink to="/graphics" className={({ isActive }) => isActive ? "rounded-[5px] ml-auto after:duration-300 relative z-[1] overflow-hidden after:absolute after:inset-0 after:bg-navactive after:z-[-1] after:w-full text-white rounded-tr-[5px] rounded-br-[5px]" : "backdrop-blur-sm ml-auto after:duration-300 relative z-[1] overflow-hidden after:absolute after:inset-0 after:bg-transparent after:w-0 bg-nav text-[#9f9f9f] rounded-tr-[5px] rounded-br-[5px] transition-all"}>
                            <p className="px-6 py-3 uppercase w-[86px] font-medium text-[9.63px] grid place-content-center tracking-wider">Graphics</p>
                        </NavLink>
                    </nav>
                </motion.div>}
            </AnimatePresence>
            <div className="overflow-hidden bg-[#282828] lg:w-20 w-14 aspect-square rounded-full grid place-content-center duration-200">
                <motion.label drag className={`${isActive ? "bg-blue" : ""} z-40 blue_hover grid place-content-center lg:w-20 lg:h-20 w-14 h-14 rounded-full cursor-pointer`} onClick={() => setIsActive(!isActive)}>
                    <input onChange={handleToggle} type="checkbox" id="checkbox"/>
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bar bar--top"></div>
                        <div className="bar bar--bottom"></div>
                    </label>
                </motion.label>
                <AnimatePresence>
                    <motion.div
                        variants={menuContainerVariant}
                        initial="initial"
                        animate={isActive ? "animate" : "exit"}
                        exit="exit"
                        className="flex flex-col justify-between pt-32 pb-8 pr-8 lg:pl-20 pl-10 fixed top-0 bottom-0 right-0 md:w-1/2 w-full  bg-[#282828] text-white">
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