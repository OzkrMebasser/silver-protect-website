import React, { useState } from 'react';
import '../FloatContact.css'


const Contact = () => {
    const mainClassName = "social";
    const [classname,setClassname] = useState(mainClassName);
    
    function Toggle(){
    
    if(classname == "social"){
    setClassname("social hide");
    }else{
    setClassname("social");
    }
    }
    
    


  return (
    <>
    <div className="wrapper">
        <a className={classname} href="#"><i className="fa fa-whatsapp"></i></a>
        <a className={classname} href="#"> <i className="fa fa-phone"></i></a>
        <a className="close-button" onClick={Toggle} href="#"> <i className="fa fa-close"></i></a>
    </div>
</>
  )
}

export default Contact