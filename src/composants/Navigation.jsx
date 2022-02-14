
import React from 'react';
import {NavLink} from "react-router-dom";
import ic1 from '../assets/ic1.png';
import ic2 from '../assets/ic22.jpg';
import ic3 from '../assets/ic3.jpg';
import Card from './Card.jsx';
import '../styles/app.scss';


function Navigation({text}) {
    
 //const history=useHistory();   

  return (
    
    <div className='Navigation'>
        

        <div className='et'>
    <NavLink  activeStyle={{fontWeight: "bold"}} className={'na'}  to="/Etudiant">
    <Card>
    <img src={ic1} alt='Logo_calen' className='ic1' />
    <p className='bt'>Etudiant</p>
    </Card>
    </NavLink>
      </div>

      <div className='ens'>
    
      <NavLink activeStyle={{fontWeight: "bold"}} className={'na'}  to="/Enseignant">
        <Card>
      <img src={ic2} alt='Logo_calen' className='ic2' />
      <p className='bt'>Enseignant</p>

        </Card>
      </NavLink>
      </div>

      <div className='adm'>
      <NavLink activeStyle={{fontWeight: "bold"}} className={'na'} to="/Admin">
        <Card>
        <img src={ic3} alt='Logo_calen' className='ic3' />
        <p className='bt'>Admin</p>
        </Card>
      </NavLink>
      </div>    
</div>  
  );
}

export default Navigation;



      