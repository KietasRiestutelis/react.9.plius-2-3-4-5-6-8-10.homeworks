import React from 'react';
import "./Header.css";


 function Header(props) {
   console.log(props)
  return (
    <div>
     
        <h1 className="Header-title">{props.title}</h1>
        <p className="Header-post">{props.content}</p>

        <img 
         className="Header-image"
         src={require(`./${props.img}`)} 
         alt="Summer" /> 
       
     </div>       
  )
}

export default Header;
