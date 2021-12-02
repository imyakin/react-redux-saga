import React from "react";
import { Card } from "./components/Card";
import { Counter1 } from "./components/Counter1";
import Counter2 from "./components/Counter2"
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import Form from "./components/Form";
import {Counter3} from "./components/Counter3";
import './App.css'


function App() {
  return (
    <div className="container pt-3">
        <div className="container_flexbox">
            <Card>
                <Form/>
            </Card>
            <Card>
                <Counter3/>
            </Card>
            <Card>
                <Counter1/>
            </Card>
            <Card>
                <Counter2/>
            </Card>
        </div>


      <PostForm/>

      <div className="row">
        <div className="col">
          <h2>Посты:</h2>
          <Posts/>
        </div>
        
        <div className="col">
          <h2>Асинхронные посты:</h2>
          <FetchedPosts/>
        </div>
      </div>
    </div>
  );
}

export default App;
