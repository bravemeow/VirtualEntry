import React from 'react';
import './App.css';
import PostPage from './pages/post';
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
                    <Route path="/posts">
                        <PostPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;