import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: 100,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
}

const Page = () => {
  return (
    <main style={pageStyles}>
      <title>Idan Dagan</title>
      <div>
        <h1><Link style={linkStyles} target='_blank' to="https://github.com/idandagan1">Idan Dagan</Link></h1>
      </div>
    </main>
  )
}

export default Page
