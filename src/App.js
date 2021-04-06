import {Provider} from 'react-redux'; //所有组件拥有redux的store
import Header from './common/header';
import {BrowserRouter,Route } from 'react-router-dom'
/* 路由区域 */
import Home from './pages/home'
import store from "./store"; //redux


function App() {
  return (
   
    <Provider store={store}>
       <div>
        <Header />
        <BrowserRouter>
          <div>
             <Route path="/" exact component={Home}></Route>
             <Route path="/detail" exact render={()=><div>detail</div>}></Route>
          </div>
        </BrowserRouter>
      </div>
       
    </Provider>
       
  );
}

export default App;
