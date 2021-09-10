import React from 'react'
import '../App.css'

export default function Ham() {
    return (
        <div style={{position:"absolute",right:"2vh",zIndex:1000,top:"2vh"}} className="hamburger">
            <div style={{width:"32px",height:"3px",backgroundColor:"white",margin:"4px"}}></div>
            <div style={{width:"32px",height:"3px",backgroundColor:"white",margin:"4px"}}></div>
            <div style={{width:"32px",height:"3px",backgroundColor:"white",margin:"4px"}}></div>
        </div>
    )
}
