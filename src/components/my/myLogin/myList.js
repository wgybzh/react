import React,{Component,Fragment} from "react";
export default class MyList extends Component{
    render(){
        return (
            <div className="myList">
               <div className="myListOne"> <span>我的订单</span> 
                    <p> 查看全部 <i className="fa fa-chevron-right"></i></p> 
               </div>
               <ul className="">
                    <li>
                        <i className="fa fa-shopping-cart"></i>
                    </li>
                    <li>
                        <i className="fa fa-shopping-cart"></i>
                    </li>
                    <li>
                        <i className="fa fa-shopping-cart"></i>
                    </li>
               </ul>
            </div>
        )
    }
}