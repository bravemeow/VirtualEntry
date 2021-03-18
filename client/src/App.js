import React, {useState, useEffect} from 'react';
import axios from 'axios';


const App = props => {
    const [state, setState] = useState('')
    useEffect( () => {
        axios.get('/api/hello')
            .then(res => setState(res.data))
            .catch(err => console.error(err))
    }, [])
    return(
        <div>
            <h2>{ state.response_text }</h2>
        </div>
    )
};

export default App;