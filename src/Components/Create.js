import { InputField,Form,Button,Mandatory,Error,FormTitle } from "./NavBar.Styled"
import {  useState,useRef,useEffect } from "react";

function Create(){
    var name = useRef();
    var date = useRef();
    var title = useRef();
    var description = useRef();
    var firstTag = useRef();
    var secondTag = useRef();
    var [formErrors , setFormErrors] = useState({}); 
    
    
  const handleSubmit = (e) => 
  {
     e.preventDefault();   
     setFormErrors(Validate(name.current.value,
                           date.current.value,
                           title.current.value,
                           description.current.value,
                           firstTag.current.value,
                           secondTag.current.value));
  }

  const Validate =(name,date,title,description,fTag,sTag) => 
  {
    const errors = {};
    
     
      if(!name)
        errors.name = "Please enter Your name!";
      else if(name.charAt(0) !== '@' || /[A-Z]/.test(name))
        errors.name = "Invalid!";

      if(!date)
         errors.date="Plese enter the Date";
    
      if(!title)
        errors.title = "Please enter the title";
      else if(title.length < 5)
        errors.title = "Enter Proper title";
  
      if(!description)
        errors.description = "Please enter the content";
      else if(description.length < 10)
        errors.description = "Enter Proper description";
      
      if(!fTag)
        errors.fTag = "Please enter this field";
      else if(fTag.charAt(0) !== '#')
        errors.fTag = "Tag must be start with #";
      
      if(!sTag)
        errors.sTag = "Please enter this field";
      else if(sTag.charAt(0) !== '#')
        errors.sTag = "Tag must be start with #";

      return errors;
}

const handleClick = () => 
{
    name = "";
    date ="";
    title= "";
    description = "";
    firstTag = "";
    secondTag = "";
    setFormErrors({});
};

useEffect(() => 
{
    localStorage.setItem('Username', name.current.value);
    localStorage.setItem('Date', date.current.value);
    localStorage.setItem('Title', title.current.value);
    localStorage.setItem('Description', description.current.value);
    localStorage.setItem('FirstTag', firstTag.current.value);
    localStorage.setItem('SecondTag', secondTag.current.value);
  },
);

return(
    <div>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Article</FormTitle>
        <InputField>
            <label>Username<Mandatory>*</Mandatory></label>
            <input 
              ref = { name }
              type="text" 
              name="name" />
            <Error>{ formErrors.name}</Error>
        </InputField>
        <InputField>
            <label>Date<Mandatory>*</Mandatory></label>
            <input 
               ref = { date }
               type="text"
               name="date" />
              <Error>{ formErrors.date}</Error>
        </InputField>
        <InputField>
            <label>Title<Mandatory>*</Mandatory></label>
            <input 
               ref = { title }
               type="text" 
               name="title" />
            <Error>{ formErrors.title}</Error>
        </InputField>
        <InputField>
            <label>Description<Mandatory>*</Mandatory></label>
            <input 
               ref = { description }
               type="textarea"
               name="description" />
            <Error>{ formErrors.description}</Error>
        </InputField>
        <InputField>
             <label>First Tag<Mandatory>*</Mandatory></label>
             <input 
               ref = { firstTag }
               type="text"
               name="tag1" />
              <Error>{ formErrors.fTag }</Error>
        </InputField>
        <InputField>
              <label>Second Tag<Mandatory>*</Mandatory></label>
              <input
                ref = { secondTag }
                type="text"
                name="tag2" />
                <Error>{ formErrors.sTag }</Error>
        </InputField>

        <Button>
        <input type="submit" name="submit" value="Submit" />
        <input type="reset" name="clear" value="Clear" onClick={handleClick} />
        </Button>

   </Form>
   </div>
   )
}
export default Create;