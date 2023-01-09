import { useContext } from "react"
import AppContext from "../context_api/AppContext";

export default function Modal() {
  const {
    clicked, setClicked
  } = useContext(AppContext);

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
  <header>
    <div className="modal-container">     
      <button onClick={ handleClick }>X</button>
      <input></input>
    </div>
  </header>)
}