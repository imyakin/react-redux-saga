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
import Navbar from "./components/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom'


function App() {
  return (
      <>
          <BrowserRouter>
            <Navbar/>

              <div className="container pt-3">
                  <Routes>
                      <Route
                          path='/'
                          render={() => <Form/>}
                          exact
                      />
                      <Route component={Counter1} path={'/counter1'}/>
                  </Routes>
              </div>

            <div className="container pt-3">
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
          </BrowserRouter>
      </>
  );
}

export default App;
