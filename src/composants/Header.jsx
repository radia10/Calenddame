import logo from '../assets/Logo.png';
//import '../styles/app.scss';

//import Recommandation from './Recommandation.jsx';

function Header({title}) {
    
    return (<div className='lmj-banner'>
        
        <img src={logo} alt='Logo_calen' className='logo' />
        <h1 className='lmj-title'>{title}</h1>
        
        
        </div>)
}

export default Header;