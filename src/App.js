import logo from './logo.svg';
import  { useState , useEffect} from 'react';
import './App.css';

function App() {
  const [random_users, setRandomUsers] = useState([]);

  useEffect(()=>{
    getRandomUsers();
  },[]);

   function getRandomUsers() {
    
    let url = 'https://randomuser.me/api/?page=1&results=100&format=json';

    fetch(url).then(res => res.json()).then( response => {

      console.log(response.data);
      let data =  response;
      setRandomUsers(data.results);
      console.table(data.results);
    }, err=> console.log('some error has occured',err))
  }
  return (
    <div className="wrapper">

      <div className="empdir">

      
      <div className="empdir--search">
        {/* <div className="search--dropdown">Select a category</div>
        <div className="search--input">
          <input type="text"/>
        </div>
        <div className="search--button">
          <button></button>
        </div> */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
 
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="empdir--table">
        <table className="table table-success table-striped">
          <thead>
            <th>No</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Location</th>
            <th>Age</th>
            <th>Picture</th>
          </thead>
          <tbody>
          {
            random_users.map((user,index)=> {
              
              return (

                <tr>
              <td>{index +1}</td>
              <td>{user.name.title} {user.name.first} {user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.location.city} {user.location.state}</td>
              <td>{user.dob.age}</td>
              <td><img src={user.picture.thumbnail}></img></td>

            </tr>
              )
            })
          }
         
          </tbody>
        </table>
      
      </div>

      </div>


    </div>
  );
}

export default App;
