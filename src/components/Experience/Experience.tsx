'use client'

import styles from './Experience.module.css'
import { motion } from 'framer-motion'

export default function Experience() {
    const experiences = [
        { year: '2025', title: 'Google Summer of Code', company: 'Contributor @ AOSSIE' },
        { year: '2024–Present', title: 'President, E-Cell', company: 'Polaris School of Technology' },
        { year: '2022–2023', title: 'Business & Innovation Intern', company: 'SHA Infinity Services' },
        { year: '2019–Present', title: 'Founder', company: 'Berozgar Union (Holding Co)' },
    ]

    const stack = [
        { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'] },
        { category: 'Frameworks', items: ['Next.js', 'React', 'Node.js', 'Express', 'LangChain'] },
        { category: 'Tools', items: ['AWS', 'Docker', 'Git', 'Supabase', 'Figma'] },
        { category: 'Domains', items: ['AI/ML', 'Event Ops', 'Product Strategy', 'No-Code'] },

    ]

    return (
        <section className={styles.section} id="experience">
            <div className={styles.header}>
                <span className={styles.title}>02 — The Operator</span>
            </div>

            <div className={styles.grid}>
                {/* Experience Column */}
                <div>
                    <h3 className={styles.columnTitle}>Trajectory</h3>
                    <div className={styles.timeline}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={styles.role}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className={styles.year}>{exp.year}</span>
                                <h4 className={styles.roleTitle}>{exp.title}</h4>
                                <p className={styles.company}>{exp.company}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stack Column */}
                <div>
                    <h3 className={styles.columnTitle}>Arsenal</h3>
                    <div className={styles.stackGrid}>
                        {stack.map((cat, index) => (
                            <motion.div
                                key={index}
                                className={styles.stackCategory}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            >
                                <h4 className={styles.categoryTitle}>{cat.category}</h4>
                                <div className={styles.stackList}>
                                    {cat.items.map((item) => (
                                        <span key={item} className={styles.stackItem}>{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
