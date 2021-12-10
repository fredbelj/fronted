import "./styles.css";
import SearchForm from '../SearchForm'; /* la carpeta SearchForm contiene un archivo index.js, por lo tanto no es necesario especificar la ruta completa ya que js toma el archivo index.js por defecto */
// import InputForm from "../SearchForm/Input";
import {useEffect, useState} from "react";
import List from "../List";
import {getUser} from '../../api'

function App() {
  const APPNAME = "Contactame";
  const [message, setMessage] = useState("Bienvenido");
  const [personL, setPersonL] = useState([]);

  useEffect(() => {
    document.title = `${message}`;
  });

  const controller = (letter) => {
    getUser().then(response=>{
      setMessage(`loaded ${letter}`)
      const data = response.data;
      setPersonL(data.filter((item)=>{
        return item.name.last[0] === letter;
      })
      )
    })
  }

  // const dummy = [
  //   {
  //     "id": 1,
  //     "firts": "Freddy",
  //     "last": "Belmonte"
  //   }
  // ]

  return (
      <div className="container">
        <header className="App-header jumbotron">
          <h1>{APPNAME}</h1>
          <h3>{message}</h3>
        </header>
        <div className="buttons">
          <SearchForm getUser={controller}/>
        </div>
        <div className = "clearfix"></div>
        <div className = "row">
          {/* <InputForm /> */}
          <List list = {personL} />
        </div>
      </div>
  );
}

export default App;
