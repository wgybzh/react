import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,Switch,NavLink,Redirect} from "react-router-dom";
import Home from "../components/home/home";

import Car from '../components/car/car';
import My from "../components/my/my";
import "../common/js/flexble"
class App extends Component {
  render() {
    return (
     <Router>
        <div className="box">
          <header>
          </header>
            <section>
              <Route path="/index/home" component={Home}/>
             
              <Route path="/index/car" component={Car}/>
              <Route path="/index/my" component={My}/>
          </section>
          <div id="footer">
            <ul>
              <li>
                <NavLink to="/index/home">
                <i className="fa fa-frown-o">  </i>
                <span>
                  今日特卖
                </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/list">
                <i className="fa fa-frown-o">  </i>
                <span>
                  品牌团
                </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/index/car">
                <i className="fa fa-frown-o">  </i>
                <span>
                  购物车
                </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/index/my">
                  <i className="fa fa-frown-o">  </i>
                  <span>
                    我的
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
     </Router>
    );
  }
 
}

export default App;
