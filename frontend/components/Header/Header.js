import React from 'react'
// import Navbar from '../Navbar/Navbar'
import styles from "./header.module.css"

const Header = () => {

    return (
        <header className={styles.header}>
            {/* <Navbar /> */}
            <h1>Streamline Your Training</h1>
            <button>Sign Up Free</button>
        </header>
    )
}

export default Header
