import React, { useState } from "react"
import styles from "../styles/components/form.module.scss"

const Form = (props) => {
      const [ input, setInput ] = useState("")
      const [ valid, setValid ] = useState(false)

      const inputStyle = {
            border: "2px solid red"
      }

      valid ? (inputStyle.border = "2px solid green") : (inputStyle.border = "2px solid red")

      const handleChange = (e) => {
            const regex = /\w{2,}\@\w{2,}\./ig
            const value = e.target.value

            setInput(value)
            regex.test(value) ? setValid(true) : setValid(false)
      }

      const handleSubmit = (e) => {
            !valid && e.preventDefault()
      }

      return (
            <form
            method="POST"
            action="/email"
            className={props.type === "primary" ?
                        `${styles.form} ${styles.formPrimary}` :
                        `${styles.form} ${styles.formSecondary}`}>
                  <input type="text" placeholder="Your Email Address" name="email"
                  value={input} style={inputStyle} onChange={handleChange}/>
                  <button type="submit" onClick={handleSubmit}>
                        {props.type === "primary" ? "Get Started" : "Get Started For Free"} 
                  </button>
            </form>
      )
}

export default Form