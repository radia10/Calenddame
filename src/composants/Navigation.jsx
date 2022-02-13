
import React from 'react';
import {NavLink} from "react-router-dom";


function Navigation({text}) {
  return (
    
    <div className='Navigation'>
        <NavLink to="/Etudiant.jsx">
        Etudiant

      </NavLink>
      <NavLink to="/Enseignat.jsx">
        Enseignat

      </NavLink>
      <NavLink to="/Admin.jsx">
        Admin

      </NavLink>
    
</div>

    
  );
}

export default Navigation;



      