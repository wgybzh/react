import React,{Component} from "react"

export default class HomeDealList extends Component{
    
    render(){
        let {dealList} = this.props;
        console.log(dealList)
        return(
            <div className="home_deal_box">
                    <div className="home_deal_list">
                        <a className="home_deal_item">
                            <img></img>
                        </a>
                    </div>
            </div>
        )
    }
}