import './styles.css'
import logo from '../../Assets/img/leo-madeiro.png'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className='Logo' >
                <img src={logo} alt='logo'/>
            </div>
            <h3>Usuário</h3>

            <div className='Link'>
                    <i  className="fas fa-user-plus"></i>
                    <Link to="/">Cadastrar</Link>
            </div>

            <div className='Link'>
                    <i className="fas fa-users"></i>
                    <Link to="/lista">Lista</Link>
            </div>
        </div>
    )
}


export default Sidebar