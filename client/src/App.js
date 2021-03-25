import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignPage from './pages/account';
import HomePage from './pages/home';
import NavBar from './components/NavBar';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


function App() {
    return (
        <Router>
            <NavBar />
            <div className="myMain container">
                <Switch>
                    <Route path="/" exact id="home">
                        <HomePage />
                    </Route>
                    <Route path="/register">
                        <SignPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;