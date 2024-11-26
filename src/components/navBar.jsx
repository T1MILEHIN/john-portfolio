import { useState } from "react";
import logo from "../assets/images/logo2.png";
import { IoReorderTwo } from "react-icons/io5";
import { NavLink } from "react-router-dom";
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
    const [isActive, setIsActive] = useState(false);

    return (
        <header className="flex justify-between items-center md:p-8 p-4">
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav className="flex items-center font-medium text-sm *:duration-300">
                    <NavLink to="/" className={({ isActive }) => isActive ? "after:origin-left after:ml-auto after:left-0 after:duration-300 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-navactive after:z-[-1] after:w-full text-white rounded-tl-[5px] rounded-bl-[5px]" : "after:origin-left after:duration-300 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-transparent after:w-0 bg-nav rounded-tl-[5px] rounded-bl-[5px] transition-all"}>
                        <p className="px-6 py-3">UI/UX</p>
                    </NavLink>
                    <NavLink to="/graphics" className={({ isActive }) => isActive ? "ml-auto after:duration-300 relative z-[1] overflow-hidden after:absolute after:inset-0 after:bg-navactive after:z-[-1] after:w-full text-white rounded-tr-[5px] rounded-br-[5px]" : "ml-auto after:duration-300 relative z-[1] overflow-hidden after:absolute after:inset-0 after:bg-transparent after:w-0 bg-nav rounded-tr-[5px] rounded-br-[5px] transition-all"}>
                        <p className="px-6 py-3">Graphics</p>
                    </NavLink>
                </nav>
            </div>
            <div className="z-20 overflow-hidden bg-[#282828] w-20 aspect-square rounded-full grid place-content-center cursor-pointer duration-200">
                <IoReorderTwo onClick={() => setIsActive(!isActive)} size={40} color="white" className="z-30" />
                <AnimatePresence>
                    <motion.div
                        variants={menuContainerVariant}
                        initial="initial"
                        animate={isActive ? "animate" : "exit"}
                        exit="exit"
                        className="p-20 absolute top-0 bottom-0 right-0 w-1/2  bg-[#282828] text-white">
                        <ul className="leading-[100px] text-6xl">
                            <motion.li to="/" custom={1} variants={liVariants}>
                                <NavLink>Home</NavLink>
                            </motion.li>
                            <motion.li custom={2} variants={liVariants}>
                                <NavLink to="/about">About</NavLink>
                            </motion.li>
                            <motion.li custom={3} variants={liVariants}>
                                <NavLink>Works</NavLink>
                            </motion.li>
                            <motion.li custom={4} variants={liVariants}>
                                <NavLink>Contact</NavLink>
                            </motion.li>
                        </ul>
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