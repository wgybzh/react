/* eslint-disable jsx-a11y/alt-text */
import React,{Component,Fragment} from "react";
import {Link} from "react-router-dom"
import "../../common/css/home.css"
export default class Home extends Component{
   render(){
       return(
           <Fragment>
               <div className="homeHeader">
                    <h1> <img src="../../common/img/logo.png"/> </h1>
                    <p className="homeSer">
                       <Link to="/homeSer" ></Link>
                    </p>
                    <div>
                        <a href="#/homeSort">
                            <i className="fa fa-search"></i>
                        </a>
                    </div>
               </div>
           </Fragment>
       )
   }
  
}