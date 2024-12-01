import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"
import profile_pic from "../assets/images/profile.png"

const LandingProfile = () => {
    const { pathname } = useLocation()
    return (
        <>
            <img className="w-full md:w-[700] lg:w-[800px] mx-auto" src={profile_pic} alt="" />
            <div className="font-light absolute top-1/2 -translate-y-1/2 md:right-44 text-center flex flex-col gap-3">
                <p className="relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-1 after:rounded-[10px] after:bg-[#263238]">Oluwawole Johnbeloved Ayomide</p>
                <AnimatePresence mode="wait">
                    {pathname === "/" ? (
                        <motion.p
                            key="product-designer" // unique key for tracking this element
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="font-medium text-sm"
                        >
                            Product Designer
                        </motion.p>
                    ) : (
                        <motion.p
                            key="graphics-designer" // unique key for tracking this element
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="font-medium text-sm"
                        >
                            Graphics Designer
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            <hr className="border-[#636363]" />
        </>
    )
}

export default LandingProfile