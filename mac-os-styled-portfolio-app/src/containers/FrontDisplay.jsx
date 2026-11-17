import React from 'react'

import { Navbar, Welcome, Dock,Home } from "#components";
import { Terminal ,Safari,Resume,Finder,Text,ImageWindowContent,Contact} from "#windows/index.js";

const FrontDisplay = () => {
    return (
       <div className="front-display">
           <Navbar />
           <Welcome />
           <Dock />

           <Terminal />
           <Safari />
             <Resume />
             <Finder />
             <Text/>
             <ImageWindowContent />
             <Contact/>
             <Home />
       </div>
    )
}
export default FrontDisplay
