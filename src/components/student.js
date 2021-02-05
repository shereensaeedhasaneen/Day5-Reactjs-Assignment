import { deletestudent } from "../actions";
const Car = ({ carInfo,history }) => {
    const goToDetails = ()=>{
        history.push(`/cars/${carInfo.id}`)
    }

    const Delete = ()=>{
        
        deletestudent(carInfo.id);
        history.push('/')
     }

    if (carInfo) {
        return <div onClick={goToDetails} className="alert alert-dark d-flex justify-content-between">
            <h4 className="align-self-center">
                {carInfo.name}
            </h4>
           
           <input type="button" class="btn btn-danger" onClick={Delete} value ="Delete"/>
            
        </div>
    }

    
}
export default Car

