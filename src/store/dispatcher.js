import {Dispatcher} from "flux";
import store from "./index";

const dispatcher = new Dispatcher();

dispatcher.register((action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
       
    }
})

export default dispatcher;