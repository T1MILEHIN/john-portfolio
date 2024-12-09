import laptop from "../../assets/images/laptop.png"
import img1 from "../../assets/images/clearwage/1.jpg"
import img2 from "../../assets/images/clearwage/2.svg"
import img3 from "../../assets/images/clearwage/3.png"
import img4 from "../../assets/images/GadCare/1.svg"
import img5 from "../../assets/images/moises/1.svg"
import img6 from "../../assets/images/moises/2.svg"
import img7 from "../../assets/images/moises/3.svg"

import Footer from "../../components/footer"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LandingProfile from "../../components/landingProfile";
import HoverEffect from "../../components/custom/hoverEffect";
import { Parallax } from 'react-scroll-parallax';

const Graphics = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })
  const isInView2 = useInView(ref2, { once: true })
  const isInView3 = useInView(ref3, { once: true })
  return (
    <>
      <div className="">
        <div className="px-2 md:px-20 md:pt-36 relative">
          <LandingProfile />
        </div>
        <div className="p-10 flex flex-col gap-20">
          <h1 className="mx-auto lg:w-[1023px] font-medium">RECENT WORKS</h1>
          <div ref={ref1} className="py-20 flex flex-col gap-8">
            <motion.div className="mx-auto w-fit relative">
              <img src={laptop} alt="" className="md:w-[677px] mx-auto" />
              <div className="bg-bodybg overflow-hidden grid place-content-center absolute top-5 right-20 bottom-14 left-20">
                <div className="flex gap-5">
                  <motion.img
                    animate={
                      isInView1
                        ? { translateX: [0, -500, 0] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    src={img1} alt="" />
                  <motion.img
                    initial={{ translateY: 80 }}
                    animate={
                      isInView1
                        ? { scale: [1, 8, 1] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="z-10" src={img2} alt="" />
                  <motion.img
                    animate={
                      isInView1
                        ? { translateX: [0, 500, 0] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    src={img3} alt="" />
                </div>
              </div>
            </motion.div>
            <div className="sm:w-[450px] mx-auto text-center flex flex-col gap-4">
              <h2 className="font-medium uppercase">clearwage Website Design</h2>
              <p className="text-sm">End to end Web application for Gadcare. GadCare provides product care solutions for your digital products and appliances.</p>
            </div>
          </div>
          <div ref={ref2} className="py-20 flex flex-col gap-8">
            <motion.div className="mx-auto w-fit relative">
              <img src={laptop} alt="" className="md:w-[677px] mx-auto" />
              <div className="bg-bodybg overflow-hidden grid place-content-center absolute top-5 right-20 bottom-14 left-20">
                <div className="flex items-center gap-5">
                  <motion.div
                    animate={
                      isInView2
                        ? { translateY: [0, -500, 0] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="flex flex-col gap-4">
                    <img src={img4} alt="" />
                    <img src={img4} alt="" />
                    <img src={img4} alt="" />
                  </motion.div>
                  <motion.div
                    animate={
                      isInView2
                        ? { scale: [1, 3.5, 1] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="z-10">
                    <img src={img4} alt="" />
                  </motion.div>
                  <motion.div
                    animate={
                      isInView2
                        ? { translateY: [0, 500, 0] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="flex flex-col gap-4">
                    <img src={img4} alt="" />
                    <img src={img4} alt="" />
                    <img src={img4} alt="" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <div className="sm:w-[450px] mx-auto text-center flex flex-col gap-4">
              <h2 className="font-medium uppercase">GadCare Website-Application</h2>
              <p className="text-sm">End to end Web application for Gadcare. GadCare provides product care solutions for your digital products and appliances.</p>
            </div>
          </div>
          <div ref={ref3} className="py-20 flex flex-col gap-8">
            <motion.div className="mx-auto w-fit relative">
              <img src={laptop} alt="" className="md:w-[677px] mx-auto" />
              <div className="bg-bodybg overflow-hidden grid place-content-center absolute top-5 right-20 bottom-14 left-20">
                <div className="flex gap-5">
                  <motion.img
                    animate={
                      isInView3
                        ? { translateX: [0, -500, 0] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    src={img5} alt="" />
                  <motion.img
                    animate={
                      isInView3
                        ? { scale: [1, 8, 1] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="z-10" src={img6} alt="" />
                  <motion.img
                    animate={
                      isInView3
                        ? { translateX: [0, 500, 0] }
                        : {}
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    src={img7} alt="" />
                </div>
              </div>
            </motion.div>
            <div className="sm:w-[450px] mx-auto text-center flex flex-col gap-4">
              <h2 className="font-medium uppercase">Moises Mobile application Redesign</h2>
              <p className="text-sm">Co-design of Clearwage’s Web-application, Clearwage Empowers Businesses With The Modern </p>
            </div>
          </div>
          <Parallax translateY={[20, -20]}>
            <HoverEffect Z={100} rotationRange={20} style={{ width: "fit-content", marginLeft: "auto" }}>
              <div className="ml-auto button black_hover rounded-[40px] bg-black text-white">
                <HoverEffect Z={50} rotationRange={30} style={{ width: "fit-content" }}>
                  <div className="button">More Works</div>
                </HoverEffect>
              </div>
            </HoverEffect>
          </Parallax>
        </div>
      </div>
      <div>
        <h1 className="text-center mx-auto lg:w-[1023px] font-medium">GRAPHICS DESIGN</h1>
      </div>
      <Footer />
    </>
  )
}

export default Graphics