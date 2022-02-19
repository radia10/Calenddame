import './App.css';
import './styles/app.scss';

import {BrowserRouter,Route,Switch} from "react-router-dom";
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
  
      <Route  path='/Etudiant'  exact component={Etudiant}/>
      <Route  path='/Enseignant'  exact component={Enseignant}/>
      <Route  path='/Admin' exact component={Admin}/>

    </Switch>
    <div className='minsite'>
      
    </div>
    
  </BrowserRouter>
  <Footer/>
  </div>
 
 
    

    
  );
}

export default App;
