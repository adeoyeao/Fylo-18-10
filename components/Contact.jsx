import React from "react"
import styles from "../styles/components/contact.module.scss"

const Contact = (props) => {
      return (
            <div className={styles.contact}>
                  <img src={`./images/icon-${props.type}.svg`} />
                  <p>{props.type === "phone" ?
                  "+1-543-123-4567" : "info@fylo.com"}
                  </p>
            </div>
      )
}

export default Contact