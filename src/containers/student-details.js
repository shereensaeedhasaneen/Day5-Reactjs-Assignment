import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCarDetails,clearCarDetails } from '../actions'
import Header from '../components/header';
const CarDetails = ({ getCarDetails,clearCarDetails, details, match }) => {
   
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        console.log('as comp did mount')
      //  debugger;
        getCarDetails(id)

        return ()=>{
            console.log('cleanup (unmount)')
            clearCarDetails()
        }
    },[])

    const renderCarDetails = (details) => {
        if (details && details.id) {
            return (
                <div >
                    <br/><br/>
                    <h2 className="d-flex justify-content-between">
                        {details.name}
                    </h2>

                    <h3 className="d-flex justify-content-between">
                        {details.phone}
                    </h3>

                    <h4 className="d-flex justify-content-between">
                        {details.age}
                    </h4>
                </div>
            )
        }
        return ''
    }
    return (<div className="alert alert-light">
         <Header/>
        {renderCarDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.cars.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCarDetails ,clearCarDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)

