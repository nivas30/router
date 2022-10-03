import {Title,Tag,Date,Id,TagContainer,Division,
  Details,DateMonth,Topic } from "./NavBar.Styled"
function Content(props)
{
    return(
      <Division>
        <Details>
          <DateMonth>
            <Date >{props.Date}</Date>
            <Id > {props.Mail}</Id>    
          </DateMonth>
          <Topic>
            <Title> {props.Heading}</Title >   
            <div>{props.Describe}</div>
          </Topic>
        </Details>
        <TagContainer>   
          <Tag >{props.Hint1}</Tag> 
          <Tag >{props.Hint2}</Tag> 
        </TagContainer> 
    </Division>

    );
}
export default Content;