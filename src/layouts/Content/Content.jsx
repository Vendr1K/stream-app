import React from "react"
import styles from "./Content.module.scss"

export const Content = (props) => {
  const { children } = props
  return <main className={styles.test}>{children}</main>
}
