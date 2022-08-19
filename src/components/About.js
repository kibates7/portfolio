import React from 'react';
import '../style/About.css';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {

    
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>Etiam in lectus felis. Integer malesuada, urna ut consectetur pharetra, dui nibh aliquet massa, a condimentum 
                justo ipsum eget risus. Sed mi lectus, ullamcorper nec ex ut, laoreet maximus tortor. Integer nec sollicitudin 
                lorem. Praesent augue sapien, congue eget tellus at, eleifend volutpat sapien. Vestibulum turpis lorem, finibus 
                bibendum lacinia sed, condimentum quis purus. Morbi eleifend non augue sit amet pharetra. Curabitur interdum ex 
                lacus, eget laoreet elit aliquet ac. Maecenas vitae sagittis sem. Pellentesque suscipit mauris rutrum, commodo 
                mauris nec, imperdiet mauris. Integer volutpat dictum urna. Curabitur fermentum, ligula vitae suscipit convallis, 
                turpis nulla laoreet ligula, vel sagittis nisi arcu vel quam. Donec ut urna pellentesque arcu tempor auctor.
            </p>
            <Button variant="contained"><DownloadIcon/><a href={require("../files/KiaraBatesResume.pdf")} download="KiaraBatesResume"> Download my resume</a></Button>
        </div>
    );
};

export default About;