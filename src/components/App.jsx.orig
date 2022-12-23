import { useState, useEffect } from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import User from "./User";
import Players from "./Players";
import BetsContainer from "./BetsContainer";
import About from "./About";

function App() {
  const [isLoggedin, setLoggedin] = useState(() => {
    const loggedin = localStorage.getItem("loggedin");
    return loggedin ? true : false;
  });

  const handleLogin = (val) => {
    setLoggedin(val);
    val
      ? localStorage.setItem("loggedin", JSON.stringify(true))
      : localStorage.clear();
  };

  //conditional on the container className to have full access to webpage for about page
  // const {pathname} = useLocation();

  // useEffect(()=> {
  //   if(pathname){
  //     if(pathname ===  "/about"){
  //       // console.log(document.querySelectorAll('.container')[1].className)
  //       document.querySelectorAll('.container')[1].className="hi"
  //     }else{
  //       // console.log(document.querySelectorAll('.container')[1].className)
  //       // debugger
  //       document.querySelectorAll('.container')[1].className="container"
  //     }
  //   }
  // },[pathname])
 

  return (
    <>
      <div className="App">
        <Header isLoggedin={isLoggedin} handleLogin={handleLogin} />

        <div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              {isLoggedin ? <Redirect to="/user" /> : "Welcome to our home page"}
            </Route>
            
            <Route exact path="/login">
              <Login handleLogin={handleLogin} />
            </Route>
            <Route exact path="/signup">
              <Signup handleLogin={handleLogin} />
            </Route>
            <Route exact path="/user">
              <User handleLogin={handleLogin} />
            </Route>
            <Route exact path="/players">
              <Players />
            </Route>
            <Route exact path="/players/:id">
              <Players />
            </Route>
            <Route exact path="/bets">
              <BetsContainer />
            </Route>
            <Route exact path="/bets/:id">
              <BetsContainer />
            </Route>
            {/*<Route exact path='/place_bets'>*/}
            {/*<PlaceBets />*/}
            {/*</Route>*/}
          </Switch>
        </div>
        <div className = "footer">
          <p>We are not responsible for you losing any money. Please seek the neccessary help if needed.</p>
        </div>
      </div>
    
    </>
  );
}

export default App;
