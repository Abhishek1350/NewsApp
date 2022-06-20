import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer" >
      <p className="paragraph">© AB 2022</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/abhishek-bhardwaj-76b9a721b" target="_blank" rel="noreferrer"
          className="social__icon--link"><i className="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/abhishek1350" className="social__icon--link" target="_blank" rel="noreferrer" ><i
          className="fab fa-twitter"></i></a>
      </div>
    </footer>
  )
}

export default Footer