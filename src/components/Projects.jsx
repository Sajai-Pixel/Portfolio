import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Projects = () => {
    return (
        <div className="pb-8">
            <motion.h2
                className="my-20 text-center font-semibold text-5xl"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-12 flex flex-wrap lg:justify-center lg:items-start gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariants}
                    >
                        {/* Project Image */}
                        <motion.div
                            className="w-full lg:w-1/4 flex justify-center mb-6 lg:mb-0"
                            variants={childVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 150 }}
                        >
                            <img
                                src={project.image}
                                width={250}
                                height={250}
                                alt={project.title}
                                className="rounded shadow-lg"
                            />
                        </motion.div>

                        {/* Project Details */}
                        <motion.div
                            className="w-full max-w-xl lg:w-3/4"
                            variants={childVariants}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 120 }}
                        >
                            <h3 className="mb-2 font-semibold text-3xl text-stone-200">
                                {project.title}
                            </h3>
                            <p className="mb-4 text-stone-400">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mb-4 text-blue-500 hover:text-blue-700"
                            >
                                Visit Project
                            </a>
                            <div className="flex flex-wrap">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                                        variants={childVariants}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
