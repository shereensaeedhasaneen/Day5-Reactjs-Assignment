import { connect } from 'react-redux';
import Car from '../components/student';
import {getAllstudents} from '../actions/index'
const CarsList = ({ list ,history}) => {  

    if (list) {
        if (list.length > 0)
            return (
                <div className="alert ">
                    {list.map((car) => {
                        return <Car key={car.id} carInfo={car} history={history}/>
                    })}
                </div>)
        return <p>
            Enter a valid name and search again :P 
        </p>
    }

  
    ///////////////
    return (<div>
        enter student Name to search
</div>)

}



const mapStateToProps = (state) => {
    return {
        list: state.cars.list,
       
        
    }
}

export default connect(mapStateToProps, null)(CarsList)