import React, {useState, useEffect} from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';



function RegisterPage() {
    const [tokens, setTokens] = useState([]);
    return (
        <div>
            <h3>회원가입</h3>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage;