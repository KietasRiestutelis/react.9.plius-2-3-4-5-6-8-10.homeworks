import LearningList from "./4praktika/LearningList";
import Cards from "./Cards";
import Icons from "./Icons";
import Likes from "./Likes";
import ReadMore from "./ReadMore";
import "./App.css"
import DataList from "./5praktika/DataList";


// pakeiciau "App" funkcijos pavadinima i "First" paziuresiu ar app galiu pateikti kaip viena visa paketa
// kaip cards likes ir pns..
function First() {
  return (
    <div className="container">
      <div className="row bg-warning">
        <div className="col my-3">
          <Cards />
        </div>
      </div>
      <div className="row bg-light-purple">
        <div className="col my-3">
          <Likes />
        </div>
      </div>
      <div className="row bg-green">
        <div className="col my-5">
          <ReadMore />
        </div>
      </div>
      <div className="row bg-lightest-blue">
        <div className="col my-3">
          <Icons />
        </div>
      </div>
      <div className="row  bg-light-blue">
         <div className="col-2">
           <h1>4.</h1>
         </div>
          <LearningList />
      </div>
      <div className="row my-5  bg-light">
         <div className="col-2">
           <h1>5.</h1>
         </div>
         <div className="col-10">
         <DataList />
         </div>
      </div>
    </div>
  );
}

export default First;
