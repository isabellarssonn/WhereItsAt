import "./logoSection.css"
import logo from "../../assets/logo.png"

function LogoSection() {
  return (
    <section className='logo-section'>
        <img src={logo} className="logo-img" alt="logo image"/>
        <h1 className="logo-title">Where It's @</h1>
        <h2 className="logo-subtitle">Ticketing made easy</h2>
    </section>
  )
}

export default LogoSection