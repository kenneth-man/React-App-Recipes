import './App.css';
import ContextProvider from './Context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Groceries from './Pages/Groceries.js';
import Home from './Pages/Home.js';
import Info from './Pages/Info.js';
import Ingredients from './Pages/Ingredients.js';
import Menus from './Pages/Menus.js';
import RandomRecipes from './Pages/RandomRecipes.js';
import Recipes from './Pages/Recipes.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App col">
      <ContextProvider>
        <BrowserRouter>
          <Navbar/>

          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/Recipes' exact={true} component={Recipes}/>
            <Route path='/RandomRecipes' exact={true} component={RandomRecipes}/>
            <Route path='/Ingredients' exact={true} component={Ingredients}/>
            <Route path='/Groceries' exact={true} component={Groceries}/>
            <Route path='/Menus' exact={true} component={Menus}/>
            <Route path='/Info/:item' exact={true} component={Info}/>
          </Switch>

          <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;