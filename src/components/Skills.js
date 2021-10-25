import React from 'react'
import python from '../logos/python.svg'
import django from '../images/django (1).png'
import js from '../logos/js.svg'
import html from '../logos/html5.svg'
import css from '../logos/css3.svg'
import photoshop from '../images/photoshop.png'
import illustrator from '../images/illustrator.png'
import premier from '../images/premiere.png'
import xd from '../images/experience.png'
import '../App.css'


export default function Skills() {
    return (
        <div style={{backgroundColor:"black",position:"relative",zIndex:"100"}}>
            <h1 style={{textAlign:"center",fontSize:"40px",textTransform:"uppercase",fontWeight:"initial",color:"yellow"}}>Skills</h1>
            <div className="skills">
            <div className="element">
               <h3>Web Development</h3>
               <div className="skillsPic">
               <img className="html" src={html} alt="lnag" />
               <img className="html" src={css} alt="lnag" />
               <img src={js} alt="lnag" />
               <img src={python} alt="lnag" />
               <img src={django} alt="lnag" />
               </div>
            </div>
            {/* <div className="element">
                <h3>AR App Development</h3>
                <img src={unity} alt="lnag" style={{position:"relative",bottom:"30px"}}/>
                <img src={csharp} alt="lnag"/>
            </div> */}
            <div className="element graphic_design">
                <h3>Graphic Design and Video Editing</h3>
                <div className="skillsPic">
                <img src={photoshop} alt="lnag" />
                <img src={illustrator} alt="lnag" />
                <img src={premier} alt="lnag" />
                <img src={xd} alt="lnag" />
                </div>
            </div>
            </div>
        </div>
    )
}
