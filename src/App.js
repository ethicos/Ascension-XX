import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import Main from './components/Main/Main'
import Events from './routes/Events/Events';

class App extends Component {

    render(){        
        return (
            <Switch>
                <Route path="/events" component={Events} />
                <Route path="/" exact component={Main} />  
            </Switch>
        );
    }

}

export default App;
