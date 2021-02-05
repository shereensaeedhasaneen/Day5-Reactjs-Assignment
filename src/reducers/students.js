export const cars = (state={},action)=>{
    console.log(state)
    switch(action.type){
        case 'CARS_LIST':{
            return {...state,list:action.payload}
        }

        case 'CAR_DETAILS':{    
            return {...state,details:action.payload}
        }

        case 'CLEAR_CAR_DETAILS':{
            return{...state,details:action.payload}
        }
    }

    return state
}


