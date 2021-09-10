import React from 'react'
import '../App.css'
import loader from '../images/subhojit.gif'

export default function Projects({imageSrc,name,details,language,link,classname}) {
    const [ loading, setLoading] = React.useState(true)
    return (
        <div className="grid-project">
            {imageSrc.map((imagesrc)=>
            <img src={loading ? loader : imagesrc} onLoad={()=>{setLoading(false)}} style={{width:"97%",height:"100%",alignSelf:"center",justifySelf:"center",borderRadius:"20px",margin:"20px"}} className="project-image" alt="project"/>
            )}
            <div style={{backgroundColor:"#ffffff17",padding:"30px",borderRadius:"20px"}} className={classname}>
                <div style={{width:"80%"}} className="project-details">
                    <h2>Name : {name}</h2>
                    <p><b>Details</b> : {details}</p>
                    <p><b>Language</b>: {language}</p>
                    <h3>Link:  <a target="_blank" rel="noreferrer" style={{fontWeight:"bold",fontSize:"15px"}} href={link}>{link}</a></h3>
                </div>
            </div>
        </div>
    )
}
