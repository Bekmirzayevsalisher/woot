export const auth = (state=null, action) =>{
    switch(action.type){
        case "AUTH":
            return state = action.payload
        default:
            return state
    }
}