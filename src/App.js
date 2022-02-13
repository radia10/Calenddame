import './App.css';
import './styles/app.scss';

import {BrowserRouter, Route,Switch} from "react-router-dom";
import Etudiant from './composants/Etudiant.jsx';
import Enseignant from './composants/Enseignant.jsx';
import Admin from './composants/Admin.jsx';
import Navigation from './composants/Navigation.jsx';
import Header from './composants/Header';

import Footer from './composants/Footer';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    

   <Header title={'Bienvenue sur le portail d\'authentification'}/>
  <Navigation/>
  <Switch>

      <Route path='/Etudiant.jsx'>
         <Etudiant/>
      </Route>
    
    <Route path='/Enseignant.jsx'>
        <Enseignant/>
    </Route>

    <Route path='/Admin.jsx'>
        <Admin/>
    </Route>
  
    
  
    </Switch>
   

    </BrowserRouter>
    <Footer/>
    </div>
    

    
  );
}

export default App;
