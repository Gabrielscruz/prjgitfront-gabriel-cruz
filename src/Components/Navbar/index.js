import './styles.css'
import Logo from '../../Assets/img/leo-madeiro.png'
import {Link} from 'react-router-dom'
const Navbar = ( ) =>{
    return (
        <div className="navbar">

            <div className='Nav-Link'>
                    <i  className="fas fa-user-plus"></i>
                    <Link to="/">Cadastrar</Link>
            </div>

            <div className='Nav-Link'>
                    <i className="fas fa-users"></i>
                    <Link to="/lista">Lista</Link>
            </div>

            <div className='Nav-Logo'>
            <img src={Logo} alt='logo'/>
            </div>
        </div>
    )
}


export default Navbar