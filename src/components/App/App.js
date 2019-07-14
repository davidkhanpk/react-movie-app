import React from   'react';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Movie from '../Movie/Movie';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return(
       <BrowserRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/:movieId" component={Movie} />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
       </BrowserRouter>
    )
}

export default App;