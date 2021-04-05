import {Provider} from 'react-redux'; //所有组件拥有redux的store
import Header from './common/header';
import store from "./store"; //redux

function App() {
  return (
    <Provider store={store}>
        <Header />
    </Provider>
       
  );
}

export default App;
