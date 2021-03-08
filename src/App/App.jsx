import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import store from '../store/store';
import Home from "../Home/Home";


const App = () =>{
    return(
    <Provider store ={store}>
        <BrowserRouter>
        <div className="links">
            <Link to ="/">Home</Link>
        </div>
        <hr />
        <Switch>
            <Route path ="/">
                <Home />
            </Route>
        </Switch>
        </BrowserRouter>
    </Provider>
    )
}

export default App;