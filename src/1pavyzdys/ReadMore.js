import React from 'react'
import { useState} from "react"

function ReadMore() {
 
  const [hide, setHide] = useState(false);
  const [hideTwo, setHideTwo] = useState(false);

  function openText(){
      setHide(!hide)
      
  }

  function openTextTwo(){
      setHideTwo(!hideTwo)
  }

  return (
    <div className="row">
        <div className="col-2">
          <h1>3.</h1>
        </div>
      <div className="col-10">
        <article className=" mw6-ns hidden ba ">
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">
              Lorem ipsum dolor sit amet <span className={hide ? "display " : "d-none"}>consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.</span><span className={hide ? "d-none" : "display"}>...</span><span className={hide ? "d-none " : "display text-decoration-underline text-secondary"} onClick={openText}> read more</span>
              <span className={hide ? "display text-decoration-underline text-secondary" : "d-none"} onClick={openText}> read less</span> 
            </p>
            <p className="f6 f5-ns lh-copy measure mv0">
              Lorem ipsum dolor sit amet lorem kazkas tipo viskas aha gerai <span className={hideTwo ? "display " : "d-none"}>consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum.</span><span className={hideTwo ? "d-none" : "display"}>...</span><span className={hideTwo ? "d-none " : "display text-decoration-underline text-secondary"} onClick={openTextTwo}> read more</span>
              <span className={hideTwo ? "display text-decoration-underline text-secondary" : "d-none"} onClick={openTextTwo}> read less</span> 
            </p>
          </div>
        </article>
      </div>
      </div>
  )
}

export default ReadMore