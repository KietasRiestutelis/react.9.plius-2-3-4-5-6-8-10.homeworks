import React from "react";
import { useState } from "react";
import DataCards from "./DataCard";
import data from "./data.json";
 
function DataList() {
  
    const [posts, setPosts] = useState(data);

    function changeStatus(id){
        const updatePosts = [...posts];
        updatePosts.forEach((data) => {
          if (data.id === id) {
              data.status = true;
          }
        });
        setPosts(updatePosts);
    }

    function deletePost(id){
        const counters = posts.filter((item) => 
        item.id !== id );
        setPosts(counters);
    }
        
    
     
    const postsList = posts.map((post) => {
  return (
    <DataCards
      key={post.id}
      id = {post.id}
      title = {post.title}
      status = {post.status}
      changeStatus ={changeStatus}
      deletePost = {deletePost}
      />
  );
});

return <div className="row">{postsList.length ? postsList : "Empty"}</div>
}
export default DataList