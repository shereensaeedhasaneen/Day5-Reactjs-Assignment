//import { data } from "jquery"
import axios from "axios";
const baseURL = "http://localhost:3001/students"
export const getCars = async (brand) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}?name=${brand}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'CARS_LIST',
        payload
    }
}




export const getCarDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'CAR_DETAILS',
        payload
    }

}

export const clearCarDetails = ()=>{
    return {
        type:'CLEAR_CAR_DETAILS',
        payload:null
    }
}

export const create =(data)=> {
    /*let payload;
    try{
    fetch(`${baseURL}`,{
        method:'post',
        body:json.Stringify(data)
    }).then(res=>payload=res.json()).then(res=>{
        if(res)
        {
            console.log("create successfully");
        }
    })
    }
    catch(err){
        console.log(err);
    }
    return {
        type: 'ADD_STUDENT',
        payload
    }*/
    let payload;
    axios.post('http://localhost:3001/students', data
   ).then(resp => {
       payload=resp.data;
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});   

return {
    type: 'ADD_STUDENT',
    payload
}
  }

  export const getAllstudents=()=>
  {
      let payload;
  axios.get('http://localhost:3001/students')
    .then(resp => {
        payload= resp.data;
        
        console.log(payload);
    })
    .catch(error => {
        console.log(error);
    });   

    return {
        type: 'get_STUDENT',
        payload
    }
  }

  export const deletestudent =(id)=>
  {
      let payload;
    axios.delete(`http://localhost:3001/students/${id}`)
    .then(resp => {
        payload=resp.data;
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });

    return {
        type: 'Delete_STUDENT',
        payload
    }
  }
