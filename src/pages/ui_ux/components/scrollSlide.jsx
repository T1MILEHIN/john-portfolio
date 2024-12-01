import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import ReactPlayer from 'react-player'

const ScrollSlide = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    const xReverse = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
    return (
        <div ref={targetRef} className="relative h-[400vh] py-[30vh]">
            <div className="sticky top-0 right-0 left-0 overflow-hidden flex items-center h-screen">
                <div className="flex flex-col gap-5">
                    <motion.div style={{ x }} className="flex gap-5">
                        <div className="relative w-[420px] h-[237px] aspect-square bg-blue">
                            <div className="w-full h-full">
                                {/* <ReactPlayer playing={true} loop={true} url='https://www.dropbox.com/scl/fo/hdun4n5i2mpbxen8sv7ux/ANi8ny1g0B_4kpNObcObTVA?e=2&preview=Recording+2024-11-29+112357.mp4&rlkey=iqoww25vtn0sdsdjuy5vc175q&st=849gtsyl&dl=0' /> */}
                                <ReactPlayer width={`100%`} height={`100%`} playing={true} loop={true} muted={true} url='https://www.dropbox.com/scl/fi/te2r7y8c4j3vq457hvd71/teaser-2160p-1.mp4?rlkey=93s9yy5a7xghggjzfgyx113ub&st=zg4tmxi6&dl=0' />
                            </div>
                        </div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                    </motion.div>
                    <motion.div style={{ x: xReverse }} className="flex gap-5">
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                        <div className="relative w-[420px] h-[237px] aspect-square bg-black"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ScrollSlide