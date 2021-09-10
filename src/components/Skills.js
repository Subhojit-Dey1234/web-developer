import React from 'react'
import python from '../images/python.png'
import django from '../images/django (1).png'
import js from '../images/javascript.png'
import html from '../images/html-5.png'
import css from '../images/css.png'
// import unity from '../images/unity1.png'
import photoshop from '../images/photoshop.png'
import illustrator from '../images/illustrator.png'
import premier from '../images/premiere.png'
import xd from '../images/experience.png'
import '../App.css'


export default function Skills() {
    return (
        <div style={{backgroundColor:"black",position:"relative",zIndex:"100"}}>
            <h1 style={{textAlign:"center",fontSize:"40px"}}>Skills</h1>
            <div className="skills">
            <div className="element">
               <h3>Web Development</h3>
               <div className="skillsPic">
               <img src={html} alt="lnag" />
               <img src={css} alt="lnag" />
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
            <div className="element">
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
