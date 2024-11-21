import React from 'react';
import profilePic from '../assets/sajai.png';
import { HERO_CONTENT } from '../constants/index';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.5 }
    }
}

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse items-start'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center items-start lg:gap-8'>
                        <motion.img
                            src={profilePic}
                            alt="Sajai M"
                            className="rounded-3xl w-80 sm:w-96 lg:w-[550px] pointer-events-none"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <motion.div
                        className='flex flex-col items-center lg:items-start mt-10'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 variants={childVariants} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Sajai M</motion.h2>
                        <motion.span variants={childVariants} className='bg-gradient-to-r from-stone-100 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>MERN Stack Developer</motion.span>
                        <motion.p variants={childVariants} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-justify'>{HERO_CONTENT}</motion.p>
                        <motion.a
                            href="/sajai_resume.pdf"
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label="Download Sajai M's Resume"
                            download
                            variants={childVariants}
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10 shadow-md hover:shadow-lg hover:bg-stone-800 hover:text-white  transform transition-all duration-300'
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
