import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQF4V41kZpjq8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692067853033?e=1757548800&v=beta&t=-WSCwHDMnZUbHlxZKVlnAILLmhqcuQ53Pj08Eu2eO-4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/danicatruong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/danica-truong/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Danica Truong</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/danicatruong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/danica-truong" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;