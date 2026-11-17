import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import {WindowControl} from "#components/index.js";

const Contact = () => {
    return (
        <>
        <div id="window-header">
            <WindowControl target="target" />
            <h2>Contact me</h2>
        </div>

            <div className="p-5 space-y-5">
                <img src="/images/vihanga.jpg"
                     alt="Vihanga"
                     className="w-20 rounded-full" />

            <h3> Let's Connect</h3>
            <p>Got an idea ? A bug to squash? or just wanna talk tech? I'm in.</p>
            <p> contact: vihangamalindafernando@gmail.com</p>
                <ul>
                {socials.map(({id,bg,link,icon,text})=> <li key={id} style={{backgroundColor:bg}}>
                    <a href={link}
                       target="_blank"
                       rel="noopener noreferrer"
                       title={text}
                    >
                        <img src={icon} alt={text} className="size-5" />
                        <p>{text}</p>
                    </a>
                </li>)}
            </ul>

            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact,"contact")
export default ContactWindow
