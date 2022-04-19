import React from 'react';
import {BsFillArrowRightCircleFill, BsHandThumbsUp} from 'react-icons/bs';

function DataCard({id, title,status, changeStatus, deletePost}) {
    
  return (
      
      <div className="row py-2">
        <div className={status ? "row py-2 bg-success rounded col-6" : "row rounded py-2 bg-warning col-6" }>
            <div className="col-1 h3">{status ? <BsHandThumbsUp /> : <BsFillArrowRightCircleFill />}</div>
            <h5 className="col-6">{title}</h5>
        </div>
        <div className="col-2">
            <button type="button" className="btn btn-primary " onClick={() =>changeStatus(id)}>Check</button>
            <button type="button" className="btn btn-danger" onClick={() =>deletePost(id)}>Delete</button>
        </div>
      </div>
    
  )
}

export default DataCard