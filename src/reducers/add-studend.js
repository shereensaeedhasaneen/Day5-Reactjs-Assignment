export const createStudent = (state = null, action) => {
    if (action.type === "ADD_STUDENT"){
    console.log('in reducer',action)
        return action.payload}
    return state
}