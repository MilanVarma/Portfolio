import React from 'react';
import './CSS/Contact.css';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contact(){
    return(
        <div className='ContactUsPage'>
            <h1>Contact Me!</h1>
            <h4>Wanna get in touch with me? Use any of the contact details given below.</h4>

            <Button size="large" variant="text" startIcon={<EmailIcon className="EmailIcon" />}   className="EmailButton">milangirishvarma@gmail.com</Button><br />
            <Button size="large" variant="text" startIcon={<WhatsAppIcon className="WhatsappIcon" />}  ><p>9381844190</p></Button>

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

export default Contact;