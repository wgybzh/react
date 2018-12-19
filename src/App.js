import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";

import "./common/css/footer.css";
import "./common/css/reset.css";
import "./common/css/section.css";
import Index from "./components/index"
import HomeSer from "./components/home/homeCon/homeSer"
import HomeSort from "./components/home/homeCon/homeSort"
class App extends Component {
  render() {
    return (
     <Router>
        <Fragment>
         
          <main>
            <Switch>
              <Route path="/index" component={Index} />
              <Route path="/homeSer" component={HomeSer}/>
              <Route path="/homeSort" component={HomeSort}/>
              <Redirect path="/" to="/index/home" />
            </Switch>
          </main>
          
        </Fragment>
     </Router>
    );
  }
 
}

export default App;
