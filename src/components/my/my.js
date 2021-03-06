import React,{Component,Fragment} from "react";
import "../../common/css/myCss/my.css"
import MyList from "./myLogin/myList"
export default class My extends Component{
    render(){
        return (
            <Fragment>
                <div className="myTop">
                    <a href="#/index/home">
                        <i className="fa fa-mail-reply"></i>
                    </a>
                    <div className="myBtnWrap"> 
                        <span>个人中心</span> 
                        <p className="myBtn">
                            <a href="#/mylogin">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="#/myregister">注册</a>
                        </p>
                    </div>
                  
                </div>
                 <MyList />
            </Fragment>
        )
    }
}