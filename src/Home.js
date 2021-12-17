import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import './CSS/Home.css';
import DP from './Profile.jpeg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Home(){
    const history = useHistory();
    
    const GotoAboutPage = () =>{
        history.push('./about');
    }

    const GotoContactPage = () =>{
        history.push('./contact');
    }
    
    return(
    <div>
            <div className='HomeBackground'>
                <div>
                    <img src={DP} width="13.5%" height="200px" />
                </div> 
                <div>
                    <p>Hello I'm <br />  <span>Milan Varma</span> </p>
                    
                </div> 
            </div>
            <div className='BasicAbout'>
                <p>A passionate Full Stack Developer with proficient knowledge in developing Web applications.</p>
                
            </div>

            <div className='MoreAboutMe_Button'>
                <Stack spacing={3} direction="row">
                    <Button size="small" variant="text" endIcon={<ArrowForwardIosIcon />} onClick={GotoAboutPage} >About me</Button>
                    <Button size="small" variant="text" endIcon={<ArrowForwardIosIcon />} onClick={GotoContactPage} >Contact me</Button>
                </Stack>
               
            </div>

           

            <Stack spacing={{ xs: 3, sm: 3, md: 8 }} direction="row" className="SocialIcons">
               
                <IconButton style={{color:"gray"}} >
                   <FacebookIcon  />   
                </IconButton> 

                <IconButton style={{color:"gray"}}>
                   <TwitterIcon  />
                </IconButton> 


                <IconButton style={{color:"gray"}}>
                   <InstagramIcon  />
                </IconButton> 

                <IconButton style={{color:"gray"}}>
                   <GitHubIcon />
                </IconButton> 

                <IconButton style={{color:"gray"}}>
                   <LinkedInIcon />
                </IconButton> 
               
            </Stack>
           
    </div>
        
    )
}

export default Home;