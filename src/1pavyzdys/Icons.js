import React from 'react';
import { useState} from "react";
import {BsFillArrowRightCircleFill, BsHandThumbsUp} from 'react-icons/bs';

function Icons() {

  const[task, setTask] = useState({
      taskTitle: "Make a cake",
      status: false,
  });

  function changeStatus(){
      setTask((previuosState) => {
        return {...previuosState, status: true};
  });
  }

  return (
    
        <div className="row">
            <div className="col-2">
                <h1>Icons</h1>
            </div>
        <div className="col-10">
            <h3><span className="mx-2">{task.status ? <BsHandThumbsUp/> : <BsFillArrowRightCircleFill />}</span>{task.taskTitle} </h3>
            <button type="button" className="btn btn-danger" onClick={changeStatus}>Change Status</button>
        </div>
      </div>
    
    
  )
}

export default Icons