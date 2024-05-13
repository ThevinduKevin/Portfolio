import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Thevindu</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://instagram.com/thevindu_kevin?igshid=OGQ5ZDc2ODk2ZA==" className="footer_social-link" target="_blank"><i class="bx bxl-instagram"></i></a>

                <a href="https://www.linkedin.com/in/thevindu-kevin-8a94b4247" className="footer_social-link" target="_blank"><i class="bx bxl-linkedin"></i></a>

                <a href="https://twitter.com/The_Kevin2002" className="footer_social-link" target="_blank"><i class="bx bxl-twitter"></i></a>
            </div>

            <span className="footer_copy">&#169; ThevinduKevin. All Rights Reserved</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
