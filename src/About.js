import React from 'react';
import './CSS/About.css'
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles,withStyles } from '@mui/styles';
import Guvi from './Guvilogo.png';
import VIT from './VITlogo.png';
import Divider from '@mui/material/Divider';


function About() {
   
    const BorderLinearProgress = withStyles({
        root: {
          height: 5,
              width: 'xs' ? 320 : 400,
          backgroundColor: 'skyblue',
        },
        bar: {
          borderRadius: 30,
          backgroundColor: '#06a4ff',
        },
      })(LinearProgress);

      const HTML = 80;
      const Java = 50;
      const ReactJs = 85;
      const JavaScript = 75;
      const API = 85;
      const mongodb = 80;
      

    return(
        <div className='AboutMe'>
            <h2 >About <span style={{color:"#06a4ff"}}>Me</span></h2>
            <div className="Bio">
                <h1>BIO</h1>
                <p>My name is Milan Girish Varma. A passionate Full Stack Developer with proficient knowledge in building web applications. 
                    I was born and brought up in Bengaluru, Karnataka. I'm currently pursuing Integrated M-tech Software Engineering in Vellore Institute of Technology, AP.
                    Being self-motivated and disciplined has got me to learn various programming languages and constantly challenge myself to learn more and develop more applications.
                    My hobbies are listening to music, playing table tennis and reading books. I've also started to learn to play the Ukulele.
                    I've always been fond of historic places like Colosseum in Italy, Pyramids in Egypt, Rose city of Petra etc and 
                    my goal is to visit these great places one day. <br />
                    Thats all about me. <br />
                    Thank you for reading. 
                       </p>
            </div>

            <h1>Skills</h1>
            <div className='Skills'>
               
                
                <div>
                <p>HTML/CSS</p>
                <div className="skillsFlex">
                
                    <BorderLinearProgress  variant="determinate" color="secondary" value={HTML} />
                    <p>{`${HTML}%`}</p>
                   
                </div>
                
                

                <p>React.js</p>
                <div className="skillsFlex">
                    <BorderLinearProgress  variant="determinate" color="secondary" value={ReactJs} />
                    <p>{`${ReactJs}%`}</p>
                </div>
               

                <p>Java</p>
                <div className="skillsFlex">
                    <BorderLinearProgress  variant="determinate" color="secondary" value={Java} />
                    <p>{`${Java}%`}</p>
                </div>
                </div>
                
               
                <div>
                <p>JavaScript</p>
                <div className="skillsFlex">
                    <BorderLinearProgress  variant="determinate" color="secondary" value={JavaScript} />
                    <p>{`${JavaScript}%`}</p>
                </div>
                
               

                <p>Node.js/Express.js</p>
                <div className="skillsFlex">
                    <BorderLinearProgress  variant="determinate" color="secondary" value={API} />
                    <p>{`${API}%`}</p>
                </div>
               
               

                <p>MongoDB</p>
                <div className="skillsFlex">
                    <BorderLinearProgress  variant="determinate" color="secondary" value={mongodb} />
                    <p>{`${mongodb}%`}</p>
                </div>
                </div>
                
               

                
            </div>

            <div>
                <h1>Education</h1>

                <div className='education'>
                    
                        <img src={VIT} width="18%"/>
                    

                    <div>
                        <p>Integrated M-tech Software Engineering <br /> <span>VIT-AP <br /> 2018-2023</span></p>
                        
                        
                    </div>
                </div>

                <Divider light />

                <div className='education'>
                    
                        <img src={Guvi} width="18%"/>
                        <div>
                            <p>Full Stack Development <br /><span>GUVI <br /> 2021-2022</span></p>
                            
                            
                        
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About;