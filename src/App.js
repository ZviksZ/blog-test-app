import React                          from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Footer}                       from "./components/Footer.jsx";
import {Navbar}                       from "./components/Navbar.jsx";
import './App.css';
import {BlogState}                    from "./context/blog/BlogState.js";
import {About}                        from "./pages/About.jsx";
import {Home}                         from "./pages/Home.jsx";

function App() {
   return (
      <BlogState>
         <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
               <Switch>
                  <Route path={'/'} exact component={Home}/>
                  <Route path={'/about'} component={About}/>
               </Switch>
            </div>
            <Footer/>
         </BrowserRouter>
      </BlogState>
   );
}

export default App;
