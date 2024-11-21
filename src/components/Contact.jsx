import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const Contact = () => {
    return (
        <motion.div
            className="py-16 px-6 lg:px-32 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-5xl font-semibold text-center mb-12"
                variants={itemVariants}
            >
                Contact
            </motion.h2>
            <motion.div
                className="max-w-3xl mx-auto space-y-12"
                variants={containerVariants}
            >
                {/* Address */}
                <motion.div
                    className="flex items-center space-x-6"
                    variants={itemVariants}
                >
                    <FaMapMarkerAlt className="text-blue-500 text-3xl" />
                    <div>
                        <h3 className="text-2xl font-medium">Address</h3>
                        <p className="text-gray-300">Thiruvilwamala, Thrissur, 680594</p>
                    </div>
                </motion.div>

                {/* Email */}
                <motion.div
                    className="flex items-center space-x-6"
                    variants={itemVariants}
                >
                    <FaEnvelope className="text-blue-500 text-3xl" />
                    <div>
                        <h3 className="text-2xl font-medium">Email</h3>
                        <p className="text-gray-300">
                            <a
                                href="mailto:sajai.jun29@gmail.com"
                                className="hover:text-blue-500 underline"
                            >
                                sajai.jun@example.com
                            </a>
                        </p>
                    </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                    className="flex items-center space-x-6"
                    variants={itemVariants}
                >
                    <FaPhone className="text-blue-500 text-3xl" />
                    <div>
                        <h3 className="text-2xl font-medium">Phone</h3>
                        <p className="text-gray-300">
                            <a
                                href="tel:7012741974"
                                className="hover:text-blue-500 underline"
                            >
                                7012741974
                            </a>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
