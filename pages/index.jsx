import React from "react"
import Head from "next/head"
import Card from "../components/Card"
import Contact from "../components/Contact"
import Copy from "../components/Copy"
import Form from "../components/Form"
import Image from "../components/Image"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import styles from "../styles/layouts/index.module.scss"

const Index = () => {
      return (
            <main>
                  <Head>
                        <title>Fylo</title>
                  </Head>
                  <header className={styles.header}>
                        <Logo type="primary"/>
                        <Navbar type="primary"/>
                  </header>
                  <section className={styles.section} id="home">
                        <div className={styles.container}>
                        <Copy 
                        type="primary"
                        head="All your files in one secure location, accessible anywhere."
                        text1="Fylo stores your most important files in one secure location. Access then wherever you need, share and collaborate with friends, family, and co-workers."/>
                        <Form type="primary"/>
                        </div>
                        <Image url="illustration-1"/>
                  </section>
                  <section className={styles.section} id="about">
                        <div className={styles.container}>
                        <Copy 
                        type="secondary"
                        head="Stay productive, wherever you are"
                        text1="Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
                        text2="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachements requried!"/>
                        <Card 
                        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."/>
                        </div>
                        <Image url="illustration-2"/>
                  </section>
                  <section className={`${styles.section} ${styles.signup}`} id="signup">
                        <Copy 
                        type="tertiary"
                        head="Get early access today"
                        text1="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."/>
                        <Form 
                        type="secondary"/>
                  </section>
                  <footer className={`${styles.section} ${styles.footer}`}>
                        <div className={styles.container}>
                        <Logo type="secondary"/>
                        <Contact type="phone"/>
                        <Contact type="email"/>
                        </div>
                        <Navbar type="secondary" />
                  </footer>
            </main>
      )
}

export default Index