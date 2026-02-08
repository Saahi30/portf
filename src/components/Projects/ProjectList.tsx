'use client'

import styles from './ProjectList.module.css'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        title: "Google Summer of Code",
        role: "Contributor @ AOSSIE",
        desc: "Building 'Inpact' - AI-driven platform connecting creators with brands. Automated sponsorship matchmaking and contract negotiation.",
        link: "#"
    },
    {
        title: "Hero's United / Elev8",
        role: "Co-Founder",
        desc: "Immersive entertainment startup booking theaters for Marvel fan screenings. Redefining event experiences in India.",
        link: "https://www.goelev8.live"
    },
    {
        title: "Sabzi Kirana",
        role: "Founder (High School)",
        desc: "Hyperlocal delivery platform enabling 1-2 hour delivery for local stores. Built post-COVID network.",
        link: "#"
    }
]

export default function ProjectList() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <section className={styles.section} id="projects" ref={ref}>
            <div className={styles.sectionHeader}>
                <span className={styles.title}>01 — Selected Work</span>
            </div>

            <div className={styles.list}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.item}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className={styles.itemContent}>
                            <span className={styles.projectRole}>{project.role}</span>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.desc}</p>
                        </div>

                        <div className={styles.arrow}>
                            <ArrowUpRight size={32} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
