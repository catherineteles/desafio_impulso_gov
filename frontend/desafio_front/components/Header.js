import { useContext } from "react"
import AppContext from "../context_api/AppContext";
export default function Header() {
  const {
    clicked, setClicked
  } = useContext(AppContext);

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
  <header>
    <div className="header-container">     
      <img
        className="header-img"
        alt="logo"
        src="https://media.graphassets.com/XrnbNcaeSs65o67JT7Te?_gl=1*1t29x4w*_ga*NDUzNzQzNDgyLjE2NzE3MzUxNzY.*_ga_G6FYGSYGZ4*MTY3MTczNTE3OC4xLjEuMTY3MTczNTg5MS41OC4wLjA."
      />
      <button onClick={ handleClick } className="header-button">HOME</button>
    </div>
  </header>)
}