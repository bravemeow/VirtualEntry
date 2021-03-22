import React, {useState, useEffect} from 'react';
import axios from 'axios';


function RegisterPage() {
    const [tokens, setTokens] = useState([]);
    useEffect(() => {
        axios({
            method: 'POST',
            url: '/rest-auth/registration/',
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                username: 'henr22y3aasd',
                password1: 'skql1243123',
                password2: 'skql1243123',
                email: 'butte3rdys@naver.com'
            }
        }).then(res => setTokens(res.data))
        .catch((err) => console.log(err.response))
    },[])
    return (
        <>
            <h1>{ tokens.map(token => {
            return ( <h1>{console.log(token) }</h1> );
            })}
            </h1>
        </>
    )
}

export default RegisterPage;