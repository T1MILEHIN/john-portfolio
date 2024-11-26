import { useState, useEffect } from "react";
import {
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';
import Products from "./components/pages";

const works = [
    {
        client: "Clearwage",
        location: "United Kingdom",
        services: "Website and app design",
        Component: Products
    },
    {
        client: "HGA",
        location: "United States",
        services: "Website Design",
        Component: Products
    },
    {
        client: "Cocacola",
        location: "Practice",
        services: "Web re-design",
        Component: Products
    },
    {
        client: "Coursemigo",
        location: "Nigeria",
        services: "App design",
        Component: Products
    },
    {
        client: "Abbi's Place",
        location: "Nigeria",
        services: "Website re-design",
        Component: Products
    },
    {
        client: "MYABFLEX",
        location: "Nigeria",
        services: "App Design",
        Component: Products
    },
].map((n, idx) => ({ ...n, id: idx + 1 }));


const Work = ({ dir, selected, handleSetSelected }) => {
  return (
    <TableBody onMouseLeave={() => handleSetSelected(null)} className="relative">
        {works.map((work) => (
            <TableRow key={work.id} id={`shift-tab-${work.id}`} onMouseEnter={() => handleSetSelected(work.id)} onClick={() => handleSetSelected(work.id)} selected={selected} className="w-full relative border-b border-[#636363] cursor-pointer" >
                <TableCell className="py-10 md:py-16 md:text-5xl font-medium">{work.client}</TableCell>
                <TableCell className="py-10 px-5">{work.location}</TableCell>
                <TableCell className="py-10 px-5">{work.services}</TableCell>

                <AnimatePresence>
                    {selected === work.id && <Content dir={dir} selected={selected} />}
                </AnimatePresence>
            </TableRow>
        ))}
       
    </TableBody>
  )
}

const Content = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
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
            className="absolute top-0 bottom-0 md:left-[400px]  w-96 rounded-lg border border-neutral-600 p-4"
        >
            {works.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: dir === "d" ? 100 : dir === "u" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
        />
    );
};

Work.propTypes = {
    dir: PropTypes.any,
    selected: PropTypes.number,
    handleSetSelected: PropTypes.func,
}

Content.propTypes = {
    dir: PropTypes.any,
    selected: PropTypes.number,
}

Nub.propTypes = {
    selected: PropTypes.number,
}

export default Work