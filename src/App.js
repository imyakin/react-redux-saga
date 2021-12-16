import React, {useState} from "react";
import {Card} from "./components/Card/Card";
import {Counter1} from "./components/Counter1";
import Counter2 from "./components/Counter2"
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import Form from "./components/Form";
import {Counter3} from "./components/Counter3";
import './App.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
    const [user, setUser] = useState({firstname: '', lastname: ''})
    const [subUser, setSubUser] = useState([])
    const handleAddToForm = event =>{
      event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newUser = {...user}
        newUser[fieldName] = fieldValue
        setUser(newUser)
    }
    const handleSubmit = event => {
        event.preventDefault()
        const newUser = {
            name: user.firstname,
            surname: user.lastname
        }

        setSubUser([newUser])
    }

  return (
      <>
          <BrowserRouter>
            <Navbar/>

            <div className="container pt-3">
                <Card>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <Form
                                handleAddToForm={handleAddToForm}
                                handleSubmit={handleSubmit}
                                />
                            }
                            exact
                        />
                        <Route
                            path='/counter'
                            element={<Counter1/>}
                            exact
                        />
                        <Route
                            path='/counter_update'
                            element={<Counter3/>}
                            exact
                        />
                        <Route
                            path='/counter_numbers'
                            element={<Counter2/>}
                            exact
                        />
                    </Routes>
                </Card>

              <PostForm subUser={subUser}/>

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
