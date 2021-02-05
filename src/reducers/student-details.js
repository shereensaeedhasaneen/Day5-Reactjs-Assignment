export const carDetails = (state = null, action) => {
    if (action.type === "CAR_DETAILS"){
    console.log('in reducer',action)
        return action.payload}
    return state
}
