import stylex from "@stylexjs/stylex"
import { ReactElement } from "react"

export function Contact(): ReactElement {
  return (
    <>
      <h1>
        <div {...stylex.props(styles.green)}>Contact Page</div>
      </h1>
    </>
  )
}

const styles = stylex.create({
  green: {
    backgroundColor: {
      default: "lightgreen",
      ":hover": "darkgreen",
    },
    color: "black",
  },
})
