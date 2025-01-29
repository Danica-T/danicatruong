import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/danicatruong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/danica-truong/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Funny seeing you here</p>
    </footer>
  );
}

export default Footer;