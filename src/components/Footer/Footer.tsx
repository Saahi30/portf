'use client'

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.content}>
                <h2 className={styles.cta}>
                    Let's<br />Build.
                </h2>

                <div className={styles.links}>
                    <div className={styles.linkGroup}>
                        <span className={styles.linkLabel}>Get in touch</span>
                        <a href="mailto:saahi@goelev8.live" className={styles.link}>saahi@goelev8.live</a>
                    </div>

                    <div className={styles.linkGroup}>
                        <span className={styles.linkLabel}>Social</span>
                        <a href="https://www.linkedin.com/in/saahi-dubey-5a1145373/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                        <a href="https://github.com/Saahi30/" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <span className={styles.copyright}>© 2026 Saahi Dubey</span>
                <span className={styles.location}>Bangalore, India<br />Available for global collab.</span>
            </div>
        </footer>
    )
}
