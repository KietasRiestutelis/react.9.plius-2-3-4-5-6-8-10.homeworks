import React from 'react';
import "./PostContent.css"


 function PostContent(props) {
   let {title, content, img} = props;
  return (
    <div>
      <h3>{title}</h3>
      <p> {content}</p>
      <img className="PostContent-image"
        src={img}
        alt="nuotrauka"
      />
    </div>
  )
}

export default PostContent;