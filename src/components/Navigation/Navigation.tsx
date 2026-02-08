'use client'

import styles from './Navigation.module.css'
import Link from 'next/link'

export default function Navigation() {
    const navItems = [
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
                S / D
            </Link>

            <div className={styles.links}>
                {navItems.map((item) => (
                    <a key={item.name} href={item.href} className={styles.link}>
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}
