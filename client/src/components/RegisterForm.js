import React, {useState} from 'react';
import AddUser from '../function/addUser';



function RegisterForm() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password2, setPassword2] = useState('');
    const [password2Error, setPassword2Error] = useState('');
    const [error, setError] = useState('');


    function checkAddUser(email, password, password2) {
        AddUser(email, password, password2)
            .then(function(resolvedData) {
                if (!resolvedData) {
                    setError("존재하는 이메일주소입니다.")
                }
                else
                setError("회원가입을 축하드립니다.")
            });
    };
    
    // Check Validation
    function validateForm() {
        let validated = false;
        if (!email) {
            setEmailError('이메일을 입력해주세요.')
        };
        if (!password) {
            setPasswordError('비밀번호를 입력해주세요.')
        };
        if (!password2) {
            setPassword2Error('비밀번호를 입력해주세요.')
        };
        if (password !== password2 && password2 != '') {
            setPassword2Error('비밀번호가 일치하지 않습니다.')
        };
        if (email && password === password2) {
            validated = true;
        };
        return validated
    }

    function resetError() {
        setError('');
        setEmailError('');
        setPasswordError('');
        setPassword2Error('');
    };

    // Submit Button
    function onSubmit(event) {
        event.preventDefault();
        resetError();
        if (validateForm()) {
            checkAddUser(email, password, password2);
        };
    };

    return (
        <>
        <form className="sign-form" onSubmit={onSubmit}>
            <h3>회원가입</h3>
            <div className="form-group">
                <label> Email Address </label>
                <input type="email" value={email} className="form-control" onChange={e => setEmail(e.target.value) } placeholder="email" />
                <div className="sign-err">{emailError}</div>
            </div>
            <div className="form-group">
                <label> Password </label>
                <input type="password" value={password} className="form-control" onChange={e => setPassword(e.target.value) } placeholder="password" minLength="8" />
                <div className="sign-err">{passwordError}</div>
            </div>
            <div className="form-group">
                <label> Confirm Password </label>
                <input type="password" value={password2} className="form-control" onChange={e => setPassword2(e.target.value) } placeholder="password" minLength="8" />
                <div className="sign-err">{password2Error}</div>
            </div>
            <div className="sign-err">{error}</div>
            <button type="submit" className="btn btn-primary">
                OK
            </button>
            
        </form>
        </>
    );
};

export default RegisterForm;