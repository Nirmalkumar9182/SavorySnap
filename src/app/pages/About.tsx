import { ReactElement } from "react"
import * as stylex from "@stylexjs/stylex"

export function About(): ReactElement {
  return (
    <>
      <h1>
        <div {...stylex.props(styles.violet)}>About Page</div>
      </h1>
    </>
  )
}

const styles = stylex.create({
  violet: {
    backgroundColor: {
      default: "blueviolet",
      ":hover": "darkviolet",
    },
    color: "white",
  },
})
