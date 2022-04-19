import React from "react";
import Learning from "./Learning";
import {v4 as uuidv4} from "uuid";

function LearningList() {
    const learningList = [
        {
            img:"https://picsum.photos/id/237/200/300",
            language:"As mokausi HTML",
            status:"mokausi",
        },
        {
            img:"https://picsum.photos/200/300",
            language:"As mokausi CSS",
            status:"mokausi",
        },
        {
            img:"https://picsum.photos/200/302",
            language:"As mokausi JavaScript",
            status:"mokausi",
        },
    ]
  
    let data = learningList.map((data) =>{
        return (
            <Learning 
            key={uuidv4()}
            language = {data.language}
            img = {data.img}
            status = {data.status}
            />
        );
    });
      
    return<>{data}</>



}

export default LearningList