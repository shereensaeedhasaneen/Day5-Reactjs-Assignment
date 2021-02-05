import { useRef } from 'react'
import { getCars } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = ({getCars}) => {
    const brand = useRef()
    const searchByBrand = () => {
        console.log(brand.current.value)
        getCars(brand.current.value)
    }
    return <div className="col text-center">
        <div className="form-group">
            <input ref={brand} className="form-control rounded-pill text-center" type="text" placeholder="enter Studen Name (eg,shereen-reham-donia)" />
        </div>
        <div className="form-group">
            <input className="btn btn-dark w-25" type="button" value="search"
                onClick={searchByBrand} />
        </div>
    </div>
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCars }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)



// dispatch(action){
//     carsList(state,action)
//     cardetrails(state,action)
// }