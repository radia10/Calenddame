
import React from 'react';
import {NavLink} from "react-router-dom";
import ic1 from '../assets/ic1.png';
import ic2 from '../assets/ic22.jpg';
import ic3 from '../assets/ic3.jpg';
import Card from './Card.jsx';
import '../styles/app.scss';


function Navigation() {
  return (
    
    <div className='Navigation'>
        <div className='et'>
    <NavLink to="/Etudiant.jsx">
    <Card>
    <img src={ic1} alt='Logo_calen' className='ic1' />
    <p>Etudiant</p>
    </Card>
    </NavLink>
      </div>

      <div className='ens'>
    
      <NavLink to="/Enseignat.jsx">
        <Card>
      <img src={ic2} alt='Logo_calen' className='ic2' />
      <p>Enseignant</p>
        </Card>
      </NavLink>
      </div>

      <div className='adm'>
      <NavLink to="/Admin.jsx">
        <Card>
        <img src={ic3} alt='Logo_calen' className='ic3' />
      <p>Admin</p>
        </Card>
      </NavLink>
      </div>    
</div>  
  );
}

export default Navigation;



      