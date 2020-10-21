import React from "react"
import styles from "../styles/components/image.module.scss"

const Image = (props) => {
      return (
            <img src={`/images/${props.url}.svg`} alt={props.description}
            className={styles.image} />
      )
}

export default Image