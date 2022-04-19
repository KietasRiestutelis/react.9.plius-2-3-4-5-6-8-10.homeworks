import React from "react";
import "./Cards.css";
import { useState } from "react";

function Cards() {
  const [color, setColor] = useState(false);
  const [text, setText] = useState(false);

  function changeStatus() {
    setColor(!color);
    setText(!text);
  }

  return (
    
      <div className="row">
        <div className="col-2">
          <h1>1.</h1>
        </div>
      <div className="col-10">
        <article className=" mw6-ns hidden ba ">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">
            {text ? "Task is done" : "Task is not done"}
          </h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <button
              onClick={changeStatus}
              className={color ? "bg-success" : "bg-danger"}
            >
              {text ? "Done" : "Mark as done"}
            </button>
          </div>
        </article>
      </div>
      </div>
    
  );
}

export default Cards;
