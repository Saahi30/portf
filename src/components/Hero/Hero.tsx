'use client'

import styles from './Hero.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Code } from 'lucide-react'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.grid}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <div className={styles.eyebrowWrapper}>
                        <div className={styles.eyebrowContent}>
                            <Code size={20} className={styles.gsocIcon} />
                            <span className={styles.eyebrow}>
                                <span className={styles.gsocText}>Google Summer of Code '25</span> Selected
                            </span>
                        </div>
                    </div>

                    <h1 className={styles.heading}>
                        Building systems<br />
                        <span className={styles.headingHighlight}>& stories.</span>
                    </h1>

                    <p className={styles.subheading}>
                        Engineer & Operator based in Bangalore.
                    </p>

                    <div className={styles.actions}>
                        <a href="#projects" className={styles.primaryBtn}>
                            View Selected Work
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1ycMXJb94WV1KAsrWRU7SP7jnJknzbTAU/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryLink}
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
