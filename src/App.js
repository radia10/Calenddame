import './App.css';
import './styles/app.scss';

import {BrowserRouter, Redirect,Route,Switch} from "react-router-dom";
import Etudiant from './composants/Etudiant.jsx';
import Enseignant from './composants/Enseignant.jsx';
import Admin from './composants/Admin.jsx';
import Navigation from './composants/Navigation.jsx';
import Header from './composants/Header';

import Footer from './composants/Footer';





function App() {
  //let history=useHistory();

  return (
    <div className="App">
    <BrowserRouter>
    

  <Header title={'Bienvenue sur le portail d\'authentification'}/>
  <Navigation/>
  <Switch>
  
      <Route exact path='/Etudiant'  component={Etudiant}/>
      <Route exact path='/Enseignant' component={Enseignant}/>
      <Route exact path='/Admin' component={Admin}/>
      
      
        
      
    
    <Redirect path='/Enseignant'/>
        
   

    <Redirect path='/Admin'/>
       
    
   
    </Switch>
  
    
    <Footer/>
   
  </BrowserRouter>
 
    </div>
    

    
  );
}

export default App;
