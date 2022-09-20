import "../Navbar/Navbar.css";
import logo from '../../assets/images/calendar.png';

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar-img" src={logo} alt="ícone de uma agenda de tarefas" />
    </nav>
  );
}

export default Navbar;
