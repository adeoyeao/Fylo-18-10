import React from "react"
import styles from "../styles/components/card.module.scss"

const Card = (props) => {
      return (
            <div className={styles.card}>
                  <img src="./images/icon-quotes.svg" />
                  <p>{props.quote}</p>
                  <div>
                        <img src="./images/avatar-testimonial.jpg" />
                        <h3>Kyle Burton</h3>
                        <p>Founder & CEO, Huddle</p>
                  </div>
            </div>
      )
}

export default Card