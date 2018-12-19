
import React,{Component,Fragment} from "react";
import {Link} from "react-router-dom"
import "./css/style.css"
import home_header_logo from "../../common/img/homeImg/home_header_img.png"
export default class Home extends Component{
   render(){
       return(
           <Fragment>
             
                     <div id="img"> 
                      <img  src={home_header_logo}/>
                    </div>
                    <p className="homeSer">
                       <Link to="/homeSer" ></Link>
                    </p>
                    <div>
                        <a href="#/homeSort">
                            <i className="fa fa-search"></i>
                        </a>
                    </div>
                    <ul id="ddd">
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                       <li>1</li>
                    </ul>
               
           </Fragment>
       )
   }
  
}