import CarsList from '../containers/students-list'
import Search from '../containers/search';
import Header from './header'
const Home = ({history})=>{
    return <div>
        <Header />
        <br/><br/>
        <Search/>
        <CarsList history={history}/>
    </div>

}

export default Home