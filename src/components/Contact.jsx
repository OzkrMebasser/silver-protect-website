import React, { useState } from 'react';
<<<<<<< HEAD
import '../FloatContact.css'
=======

>>>>>>> a2b6ff039daa875b4294a4e7e5864913f4a14ee7


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
    
<<<<<<< HEAD
    

=======
>>>>>>> a2b6ff039daa875b4294a4e7e5864913f4a14ee7

  return (
    <>
    <div className="wrapper">
        <a className={classname} href="#"><i className="fa fa-whatsapp"></i></a>
        <a className={classname} href="#"> <i className="fa fa-phone"></i></a>
        <a className="close-button" onClick={Toggle} href="#"> <i className="fa fa-close"></i></a>
    </div>
</>
<<<<<<< HEAD
=======

>>>>>>> a2b6ff039daa875b4294a4e7e5864913f4a14ee7
  )
}

export default Contact