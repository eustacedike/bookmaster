
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/layout";



import './App.css';



//Private Route
// import PrivateRoute from "./Protected Routes/PrivateRoute";

// import { getCurrentUser } from "./components/actions/getCurrentUser";

function App() {


  const [user, setUser] = useState({ isAuthenticated: false });

  // useEffect(() => {
  //   setUser(getCurrentUser());
  // }, []);





  const [allUsers, setAllUsers] = useState([]);

  const getUsers = () => {
    axios.get("api/users/fetchusers")
      .then((response) => {
        setAllUsers(response.data.reverse());
      });

  };


  useEffect(() => {
    getUsers();
  }, [allUsers])



  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            

            {/* {
              allUsers.map(eachUser => {
                return (
                  <Route
                    path={`user/${eachUser.link}`} element={<OtherUser
                      firstname={eachUser.firstname}
                      lastname={eachUser.lastname}
                      specialty={eachUser.specialty}
                      gender={eachUser.gender}
                      about={eachUser.about}
                      origin={eachUser.origin}
                      residence={eachUser.residence}
                      avatar={eachUser.profileimage}
                      date={eachUser.date}

                      allUsers={allUsers}
                      allPosts={allPosts}
                      posts={allPosts.filter(a => { return a.authormail === eachUser.email })}
                    />}
                  />

                )
              })
            } */}



            {/* <Route path="profile" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
            /> */}
           

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
