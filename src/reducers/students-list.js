export const carsList = (state=null,action)=>{
    console.log(action)
    if(action.type === "CARS_LIST")
    {
        return action.payload
    }
    return state;
}