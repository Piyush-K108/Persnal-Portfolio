import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href={"https://www.instagram.com/piyush_0619/"} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
        <a href={"https://twitter.com/PiyushKhanchan1"} target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
        </a>
        <a href={"https://github.com/Piyush-K108"} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
        </a>
        <a href={"https://www.linkedin.com/in/prashant-khanchandani-163069236/"} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 Prashant.com</p>
    </div>
  );
}

export default Footer;
