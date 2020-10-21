import React from "react"
import styles from "../styles/components/logo.module.scss"

const Logo = (props) => {
      return (
            <img src={`./images/logo-${props.type}.svg`} alt="Fylo logo" 
            className={props.type === "primary" ? 
            `${styles.logo} ${styles.logoPrimary}` :
            `${styles.logo}`} />
      )
}

export default Logo