import { useEffect, useRef, useState } from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import PropTypes from 'prop-types';

import img1 from "../../../assets/images/works-images/Freebies.jpg"
import img2 from "../../../assets/images/works-images/hga.jpg"
import img3 from "../../../assets/images/works-images/cocacola.jpg"
import img4 from "../../../assets/images/works-images/coursemigo.jpg"
import HoverEffect from "../../../components/custom/hoverEffect";

const works = [
    {
        client: "Clearwage",
        location: "United Kingdom",
        services: "Website and app design",
        component: img1
    },
    {
        client: "HGA",
        location: "United States",
        services: "Website Design",
        component: img2,
    },
    {
        client: "Cocacola",
        location: "Practice",
        services: "Web re-design",
        component: img3
    },
    {
        client: "Coursemigo",
        location: "Nigeria",
        services: "App design",
        component: img4
    },
    {
        client: "Abbi's Place",
        location: "Nigeria",
        services: "Website re-design",
        component: img2
    },
    {
        client: "MYABFLEX",
        location: "Nigeria",
        services: "App Design",
        component: img3
    }
].map((n, idx) => ({ ...n, id: idx + 1 }));


const Work = ({ dir, setDir, currentSlide, setCurrentSlide, selected, setSelected, handleSetSelected }) => {
    return (
        <>
            <TableBody onMouseLeave={() => {
                handleSetSelected(null)
                setDir(null)
            }} className="relative">
                {works.map((work) => (
                    <Table_Row
                        key={work.client}
                        dir={dir}
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        selected={selected}
                        setSelected={setSelected}
                        handleSetSelected={handleSetSelected}>
                        {work}
                    </Table_Row>
                ))}
            </TableBody>
        </>
    )
}

const Table_Row = ({ children, currentSlide, setCurrentSlide, dir, handleSetSelected, selected, setSelected }) => {
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mousePosition.x.set(e.clientX - rect.left - 150);
        mousePosition.y.set(e.clientY - rect.top - 100);
    };

    return (
        <>
            <TableRow
                id={`overflow-hidden relative shift-tab-${children.id} content`}
                onMouseMove={
                    (e) => {
                        handleMouseMove(e);
                    }
                }
                onMouseEnter={() => {
                    handleSetSelected(children.id)
                    setSelected(children.id)
                    setCurrentSlide(children.id - 1)
                }}
                // onClick={() => handleSetSelected(children.id)}
                className="w-full relative border-b border-[#636363]" >
                <TableCell className="py-10 md:py-16 md:text-5xl font-medium">{children.client}</TableCell>
                <TableCell className="py-10 px-5">{children.location}</TableCell>
                <TableCell className="py-10 px-5">{children.services}</TableCell>

                {selected === children.id &&
                    <AnimatePresence>
                        <Content
                            dir={dir}
                            selected={selected}
                            currentSlide={currentSlide}
                            setSelected={setSelected}
                            mousePosition={mousePosition} />
                    </AnimatePresence>}
            </TableRow>
        </>
    )
}



const Content = ({ selected, dir, mousePosition, currentSlide }) => {
    const contentRef = useRef(null);
    // const [imageHeight, setImageHeight] = useState(0);
    // const [totalHeight, setTotalHeight] = useState(0);


    // console.log("DIR", dir)
    // console.log("currentSlide", currentSlide)

    // useEffect(() => {
    //     if (contentRef.current) {
    //         const imgElement = contentRef.current.querySelector("img");
    //         if (imgElement) {
    //             setImageHeight(imgElement.offsetHeight);
    //         }
    //         setTotalHeight(contentRef.current.scrollHeight);
    //     }
    // }, [contentRef]);



    return (
        <motion.div
            id="overlay-content"
            style={{
                position: 'absolute',
                top: mousePosition.y,
                left: mousePosition.x,
                transition: 'all 200ms 10ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                pointerEvents: "none",
                zIndex: 10000,
            }}
            className="absolute w-72 h-[200px] overflow-hidden">
            {/* <AnimatePresence mode="wait"> */}
                <motion.div
                    initial={{
                        translateY: -200 * currentSlide,
                    }}
                    animate={{
                        translateY: -200 * currentSlide
                    }}
                    exit={{
                        translateY: -200 * currentSlide
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 2500,
                        damping: 30,
                        delay: 1,
                        duration: 0.7,
                    }}
                    className="relative flex flex-col">
                    {works.map((img, index) => (
                        <motion.img key={index} layout="fill"
                            src={img.component}
                            // src={works[currentSlide].component}
                            alt="" className="w-full h-[200px]" />
                    ))}
                </motion.div>
            {/* </AnimatePresence> */}
            <HoverEffect Z={70} rotationRange={10} style={{ width: "fit-content" }}>
                <button className="p-2 w-fit mx-auto z-10 rounded-md bg-darkbg text-white font-bold">View</button>
            </HoverEffect>
        </motion.div>
    );
}

Table_Row.propTypes = {
    currentSlide: PropTypes.any,
    setCurrentSlide: PropTypes.func,
    children: PropTypes.any,
    dir: PropTypes.any,
    selected: PropTypes.any,
    setSelected: PropTypes.func,
    handleSetSelected: PropTypes.func,
}
Work.propTypes = {
    currentSlide: PropTypes.any,
    setCurrentSlide: PropTypes.func,
    dir: PropTypes.any,
    setDir: PropTypes.any,
    selected: PropTypes.any,
    current: PropTypes.any,
    setSelected: PropTypes.func,
    handleSetSelected: PropTypes.func,
}

Content.propTypes = {
    currentSlide: PropTypes.any,
    setCurrentSlide: PropTypes.func,
    dir: PropTypes.any,
    selected: PropTypes.any,
    current: PropTypes.any,
    setSelected: PropTypes.func,
    mousePosition: PropTypes.any,
}

export default Work; 500