import fetchJsonp from "fetch-jsonp"
import { resolve } from "uri-js";

export const dealList_action = () =>({
    type:"DEALLIST",
    payload:new Promise(resolve=>{
        let url = "https://m.api.zhe800.com/list/deals/v2?user_id=&user_type=1&user_role=1&limit=20&offset=20&visit_bit=111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000&cookie_id=15155947181545138104&client_type=3&image_type=si1&url_name=wireless1004"
        fetchJsonp(url)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    })
   
})