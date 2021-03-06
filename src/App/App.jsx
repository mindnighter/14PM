import {Provider} from 'react-redux';

import store from '../store/store';
import Home from "../Home/Home";

const App = () =>{
    return(
    <Provider store ={store}>
            <Home />
    </Provider>
    )
}

export default App;