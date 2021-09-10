import React from 'react'

export default function Contact() {
    const [showMsg , setMsg] = React.useState(false)
    return (
        <div style={{background:"black"}}>
            <h1 style={{textAlign:"center"}}>
                Contact Me
            </h1>
            <a href="https://forms.gle/7tVgopJjdNVpvsWY6" target="_blank" rel="noreferrer">
            <button style={{background:"#1b00afd1",width:"30vw",height:"5vh",position:"relative",left:"50vw",transform:"translateX(-50%)",border:"none",boxShadow:"none"}}>
                Google Form
            </button>
            </a>
            <p className="emailCopy">Click to copy the email</p>
            <p className="email" onClick={()=>{
                navigator.clipboard.writeText("subhojit2000dey@gmail.com").then(function() {
                    setMsg(true)
                    setTimeout(()=>{
                        setMsg(false)
                    },1001)
                    // console.log('Async: Copying to clipboard was successful!');
                  }, function(err) {
                    // console.error('Async: Could not copy text: ', err);
                  });
            }}>Email: subhojit2000dey@gmail.com</p>
            
            <div className={!showMsg ? "emailmsg" : "emailmsg emailanim"} >Copied!</div>
            <div style={{height:"10vh"}}>
            </div>
        </div>
    )
}
