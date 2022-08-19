import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
           <LinkedInIcon onClick={event => window.location.href = 'https://www.linkedin.com/in/kiarabates/'}/>
           <GitHubIcon onClick={event => window.location.href = 'https://github.com/kibates7/?tab=repositories'}/>
           <MailOutlineIcon onClick={event => window.location = 'mailto:bates.kiara@gmail.com'}/>
        </div>
    );
};

export default Footer;