"use client"
import { motion, useScroll } from "framer-motion";
import React from "react";

const ScrollAnimation = () => {
    const boxVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto space-y-20">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: "0px 0px 0px 0px",
                        amount: 0.5
                    }}
                    variants={boxVariants}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="p-6 bg-white rounded-lg shadow-xl min-h-svh w-full flex items-center justify-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Seção Otimizada</h2>
                    <p className="text-gray-600">Animação suave com timing ajustado</p>
                </motion.section>

                <motion.article
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                        once: true,
                        margin: "0px 0px -30% 0px"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 20,
                        mass: 0.5
                    }}
                    className="p-6 bg-blue-500 rounded-lg min-h-svh w-full flex items-center justify-center"
                >
                    <h3 className="text-2xl font-semibold mb-3">Recursos Aprimorados</h3>
                    <ul className="list-disc pl-5">
                        <li>Timing de entrada ajustado</li>
                        <li>Margem de ativação controlada</li>
                        <li>Física de mola suave</li>
                    </ul>
                </motion.article>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ staggerChildren: 0.3 }}
                    className="grid md:grid-cols-3 gap-6 min-h-svh w-full"
                >
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.4
                                    }
                                }
                            }}
                            className="p-6 bg-white rounded-lg shadow-md"
                        >
                            <motion.div
                                className="h-40 bg-gray-200 rounded-md mb-4"
                                whileHover={{ scale: 1.05 }}
                            />
                            <h3 className="text-xl font-semibold">Item {item}</h3>
                            <p className="text-gray-600 mt-2">Descrição com animação suave</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Elemento 4 - Animação progressiva */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        margin: "0px 0px -200px 0px", // Ajuste fino para scroll lento
                        amount: 0.8 // 80% do elemento visível
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "anticipate"
                    }}
                    className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl"
                >
                    <h2 className="text-4xl font-bold mb-4">Destaque Final</h2>
                    <p>Animção com início e fim suaves</p>
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollAnimation;