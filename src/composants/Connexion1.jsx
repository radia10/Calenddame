import React from 'react';
import Card1 from './Card1';
import '../styles/app.scss';

function Connexion1() {
  
    return (
       <div className='Connexion1'>
           <Card1>
           <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

  
    <div id="formFooter">
      <p className="underlineHover">Forgot Password?</p>
    </div>
           </Card1>

      </div> 
  
      
    );
  }
  
  export default Connexion1;