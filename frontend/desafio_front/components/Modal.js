import { useContext, useState } from "react"
import AppContext from "../context_api/AppContext";
import { data } from "../ListaMunicipios";

export default function Modal() {
  const {
    clicked, setClicked
  } = useContext(AppContext);

  const [searchInput, setSearchInput] = useState('');

  const handleClick = () => {
    setClicked(!clicked);
  }

  const handleChange = ({ target: { value } }) => {
    setSearchInput(value)
  }

  const handleFilter = (city) => {
    return city.nome.toLowerCase().includes(searchInput.toLowerCase())
  }
  return (
  <header>
    <div className="modal-container">     
      <button onClick={ handleClick }>X</button>
      <div>
        <p>Escolha um município</p>
        <input onChange={ handleChange } />
        {searchInput !== "" && data.filter(handleFilter).map((city) => 
          <ul>{`${city.nome}, ${city.uf}`}</ul>
        )}
      </div>
    </div>
  </header>)
}