export const change_action = (val,type)=>({
    type:"INPUT_CHANGE",
    value:val,
    style:type
})

export const add_action = ()=>({
    type:"ADD_ITEM"
})

export const modify_action = (val)=>({
    type:"MODIFY_ITEM",
    value:val
})
export const update_action = (val,type)=>({
    type:"MODIFY_CHANGE",
    value:val,
    style:type
})

export const modify_success_action = ()=>({
    type:"MODIFY_SUCCESS"
})