import './App.css';
import {useState, useEffect} from "react";
//useState hook.
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
  
  useEffect(() =>{
    //Api call to backend.
    Axios.get("http://localhost:3001/getImages").then((response) => {
      setListOfUsers(response.data); //Access data from api request
    });

  }, []);
  
  const createUser = () => {
    Axios.post("http://localhost:3001/createImage", {
      name: name, 
      age: age,
      username: username,
    }).then((response) => {
        alert("Image Saved"); //save data to backend from body.
        setListOfUsers([...listOfUsers, {name:name}])
    });
  };

  const loadUser = () => {
    Axios.get("http://localhost:3001/loadImage", {
      
    });
  };
  
  return <div className="App">
    <div className="imageDisplay">
      {
        listOfUsers.map((image) => {
          return (
          <div>
            <h1>Name: {image.name}</h1>
            <h1>Age: {image.age}</h1>
            <h1>Username: {image.username}</h1>
          </div>
        );
      })}
    </div>
  
  
    <div>
      <input 
        type="text" 
        placeholder="Name..." 
        onChange={(event) => {
          setName(event.target.value);
        }}/>
      <input 
        type="number" 
        placeholder="Age..."
        onChange={(event) => {
          setAge(event.target.value);
        }}/>
      <input 
        type="text" 
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}/>
      <button onClick= {createUser}> Create save </button>
      <button onClick= {loadUser}> Load latest save </button>


    </div>
  </div>;



  

}

export default App;
