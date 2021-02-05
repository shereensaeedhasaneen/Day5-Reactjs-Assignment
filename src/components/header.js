import { create} from '../actions'

const Header =()=>{
   
    const Add = ()=>{
       const d={
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        age:document.getElementById("age").value
       }
       create(d);
       
    }

    return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <button class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'90%'}} type="submit">Add Student</button>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Student</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input id="name" type="text" className="form-control" placeholder="Enter Student Name"/>
        <br/><input id="phone" type="text" className="form-control" placeholder="Enter Student Phone"/>
        <br/><input id="age" type="text" className="form-control" placeholder="Enter Student Age"/>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={Add}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </nav>
    
    );
  }
  
  
export default Header