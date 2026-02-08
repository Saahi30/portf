'use client'

import styles from './Skills.module.css'
import { motion } from 'framer-motion'

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "C++", "HTML/CSS", "SQL", "Ruby"]
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Node.js", "Express", "Flask", "Tailwind CSS"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Docker", "AWS", "Firebase", "Supabase", "MongoDB", "Figma"]
    },
    {
        title: "AI & Machine Learning",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain", "LLMs"]
    }
]

export default function Skills() {
    return (
        <section className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.heading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        A curated set of technologies I use to build scalable systems and intelligent applications.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className={styles.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 + (categoryIndex * 0.1) }}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        className={styles.skillPill}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
