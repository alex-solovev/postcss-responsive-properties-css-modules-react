import React from 'react'
import styles from './App.sss'

export default function App() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                PostCSS Responsive Poperties+ <br/> CSS-Modules+ <br/> ReactJS
            </h1>
            <a
                href="https://github.com/alexandr-solovyov/postcss-responsive-properties"
                className={styles.link}>
                postcss-responsive-properties
            </a>
        </div>
    )
}