import React, {useState} from 'react';



function RegisterForm() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password2, setPassword2] = useState('');
    const [password2Error, setPassword2Error] = useState('');

    function validateForm() {
        if (!email && !password && !password2) {
            setEmailError('이메일을 입력해주세요.')
            setPasswordError('비밀번호를 입력해주세요.')
            setPassword2Error('비밀번호를 입력해주세요.')
        }
        else if (!email && !password) {
            setEmailError('이메일을 입력해주세요.')
            setPasswordError('비밀번호를 입력해주세요.')
            setPassword2Error('')
        }
        else if (!password && !password2) {
            setPasswordError('비밀번호를 입력해주세요.')
            setPassword2Error('비밀번호를 입력해주세요.')
        }
        else if (!email && !password2) {
            setEmailError('이메일을 입력해주세요.')
            setPassword2Error('비밀번호를 입력해주세요.')
        }
        if (!email) {
            setEmailError('이메일을 입력해주세요.')
        }
        else if (!password) {
            setPasswordError('비밀번호를 입력해주세요.')
        }
        else if (!password2) {
            setPassword2Error('비밀번호를 입력해주세요.')
        }
        else if (password !== password2) {
            setPassword2Error('비밀번호가 일치하지 않습니다.')
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        validateForm();
    };

    return (
        <form className="sign-form" onSubmit={onSubmit}>
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
            <button type="submit" className="btn btn-primary mt-2">
                OK
            </button>
        </form>
    )
};

export default RegisterForm;