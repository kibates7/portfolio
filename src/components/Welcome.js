import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import '../style/Welcome.css'


const Welcome = () => {
    const history = useHistory()


    return (
        <div className="welcome">
            
            <div className="welcome-text">
            <h1>Hi, I'm Kiara</h1>
            <h3>Software Engineer with experience in front end and back end developemnt. Always learning.</h3>
            <Button variant="contained" onClick={()=> {history.push('/about')}} >Learn more</Button>
            </div>
            <div className="welcome-img">
            <img src={require('../images/me.jpg')} alt="me" />
            </div>
        </div>
    );
};

export default Welcome;