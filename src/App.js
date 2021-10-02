import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/Placeorder/PlaceOrder';
import Shop from './components/Shop/Shop';
import NotFund from './notFund/NotFund';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
      <Shop></Shop>
      </Route>
      <Route path='/shop'>
      <Shop></Shop>
      </Route>
      <Route path='/review'>
        <OrderReview></OrderReview>
      </Route>
      <Route path='/inventory'>
        <Inventory>

        </Inventory>
      </Route>
      <Route path='/placeorder'>
      <PlaceOrder></PlaceOrder>
      </Route>
      <Route path='*'>
        <NotFund>
        </NotFund>
      </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
