import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory} from 'react-router-dom'
import './App.css'
import {Home, MovieDetails} from "./pages";
import {BaseLayout} from "./layouts";


function App() {

const history =useHistory();
    return (
    <BaseLayout>
        <Switch>
            <Route path='/' exact>
                <Home/>
            </Route>

            <Route path='/movie/:id'>
                <MovieDetails/>
                <div>movie details page</div>
            </Route>
            <Route>
            <h1>PAGE NOT FOUND
                <button onClick={()=> history.push('/')}>
                    go home
                </button>
            </h1>
            </Route>
        </Switch>
  <Home/>
    </BaseLayout>
    );

}
export default App