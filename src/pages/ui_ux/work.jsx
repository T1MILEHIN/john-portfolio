import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import PropTypes from 'prop-types';

import img1 from "../../assets/images/works-images/Freebies.jpg"
import img2 from "../../assets/images/works-images/hga.jpg"

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
        component: img1
    },
    {
        client: "Coursemigo",
        location: "Nigeria",
        services: "App design",
        component: img2
    },
    {
        client: "Abbi's Place",
        location: "Nigeria",
        services: "Website re-design",
        component: img1
    },
    {
        client: "MYABFLEX",
        location: "Nigeria",
        services: "App Design",
        component: img1
    }
].map((n, idx) => ({ ...n, id: idx + 1 }));


const Work = ({ dir, selected, setSelected, handleSetSelected }) => {
    return (
        <TableBody onMouseLeave={() => handleSetSelected(null)} className="relative">
            {works.map((work) => (
                <Table_Row key={work.client} dir={dir} row={work.id} selected={selected} setSelected={setSelected} handleSetSelected={handleSetSelected}>{work}</Table_Row>
            ))}
        </TableBody>
    )
}

const Table_Row = ({ children, dir, handleSetSelected, selected, setSelected }) => {
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const handleMouseMove = (e, id) => {
        console.log(id)
        setSelected(id)
        const rect = e.currentTarget.getBoundingClientRect();
        mousePosition.x.set(e.clientX - rect.left - 100);
        mousePosition.y.set(e.clientY - rect.top - 60);
    };

    return (
        <>
            <TableRow
                id={`overflow-hidden relative shift-tab-${children.id}`}
                onMouseMove={
                    (e) => {
                        handleMouseMove(e, children.id);
                    }
                }
                onMouseEnter={() => handleSetSelected(children.id)}
                onClick={() => handleSetSelected(children.id)}
                className="w-full relative border-b border-[#636363]" >
                <TableCell className="py-10 md:py-16 md:text-5xl font-medium">{children.client}</TableCell>
                <TableCell className="py-10 px-5">{children.location}</TableCell>
                <TableCell className="py-10 px-5">{children.services}</TableCell>
                
                <AnimatePresence>
                    {selected === children.id && <Content dir={dir} selected={children.id} mousePosition={mousePosition} />}
                </AnimatePresence>
            </TableRow>
        </>
    )
}

const Content = ({ selected, dir, mousePosition }) => {
    console.log('selected', selected)
    return (
        <motion.div
            id="overlay-content"
            style={{
                top: mousePosition.y,
                left: mousePosition.x,
                pointerEvents: "none",
                zIndex: 1000,
            }}
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
            }}
            className="absolute w-56 rounded-2xl overflow-hidden"
        >
            {works.map((t, index) => {
                return (
                    <motion.div className="overflow-hidden" key={index}>
                        <AnimatePresence>
                            {(selected === t.id) && (
                                <div className="relative">
                                    <motion.img
                                        key={index}
                                        src={t.component}
                                        alt={t.client}
                                        initial={{
                                            opacity: 0,
                                            y: dir === "d" ? 100 : dir === "u" ? -100 : 0,
                                        }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{opacity: 0}}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                    />
                                    <button className="p-5 rounded-3xl bg-darkbg text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">View</button>
                                </div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

Table_Row.propTypes = {
    children: PropTypes.any,
    dir: PropTypes.any,
    selected: PropTypes.any,
    setSelected: PropTypes.any,
    handleSetSelected: PropTypes.func,
}
Work.propTypes = {
    dir: PropTypes.any,
    selected: PropTypes.any,
    setSelected: PropTypes.any,
    handleSetSelected: PropTypes.func,
}

Content.propTypes = {
    dir: PropTypes.any,
    selected: PropTypes.any,
    setSelected: PropTypes.any,
    mousePosition: PropTypes.any,
}

export default Work;