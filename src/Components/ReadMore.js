import { useState } from "react"
import { ReadMoreLink } from "./NavBar.Styled"
function ReadMore({children}){

    const [readMore,setReadMore] = useState(false);

    const Expand = () => {
        setReadMore(prevState => !prevState)
    }
   
    return(
        
        <div>
             {readMore ? children : children.substr(0,100)}
             <ReadMoreLink href="#" onClick={Expand}>   {readMore ? '' : '...read more'} </ReadMoreLink>
           
            
        </div>
       
    
    )
}
export default ReadMore;