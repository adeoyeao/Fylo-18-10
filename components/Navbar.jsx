import React from "react"
import styles from "../styles/components/navbar.module.scss"

const Navbar = (props) => {
      return (
            <nav className={props.type === "primary" ? 
            `${styles.navbarPrimary}` :
            `${styles.navbarSecondary}`}>
                  <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#signup">Sign Up</a></li>
                  </ul>
            </nav>
      )
}

export default Navbar 