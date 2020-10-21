import React from "react"
import styles from "../styles/components/copy.module.scss"

const Copy = (props) => {
      return (
      <div className={styles.copy}>
            { props.type === "primary" ?
            <h1>{props.head}</h1> :
            <h2>{props.head}</h2> }
            <p>{props.text1}</p>
            { props.type === "secondary" &&
            <p>{props.text2}</p> }
      </div>
      )
}

export default Copy