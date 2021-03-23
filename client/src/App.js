import React from 'react';
import './App.css';
import RegisterPage from './pages/account';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" exact>
                        Home Page
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;