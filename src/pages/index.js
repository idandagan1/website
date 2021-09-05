import * as React from "react"
import { Link } from "gatsby"
import { SocialIcon } from 'react-social-icons';

// styles
const pageStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 100,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
}

const socialContainer = {
  display: 'flex',
  justifyContent: 'center',
}

const socialItem = {
    padding: 5,
}

const Page = () => {
  return (
    <main style={pageStyles}>
      <title>Idan Dagan</title>
      <h1><Link style={linkStyles} target='_blank' to="https://github.com/idandagan1">Idan Dagan</Link></h1>
      <div style={socialContainer}>
        <div style={socialItem}>
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/idandagan1/" />
        </div>
        <div style={socialItem}>
          <SocialIcon target="_blank" url="https://www.facebook.com/IdanDagan8/" />
        </div>
        <div style={socialItem}>
          <SocialIcon target="_blank" url="https://stackoverflow.com/users/5732327/idan-dagan" />
        </div>
        <div style={socialItem}>
          <SocialIcon target="_blank" url="https://github.com/idandagan1" />
        </div>
        <div style={socialItem}>
          <SocialIcon target="_blank" url="https://twitter.com/idandagan1" />
        </div>
        <div style={socialItem}>
          <SocialIcon target="_blank" url="https://medium.com/@idandagan" />
        </div>
      </div>
    </main>
  )
}

export default Page
