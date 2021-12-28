import * as S from './style';
import React, { useState } from 'react';
import HTTP from '../../api'

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const emailHandler = e => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const passwordHandler = e => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    let body = {
      email: email,
      password: password,
    };

    HTTP.post("user/v1", body)
      .then((res) => console.log(res))
      .catch((error) => console.log(error)) 
  };

  return (
    <S.LoginArea>
      <S.MainLogoStyled />
      <S.LoginTitle>LOGIN</S.LoginTitle>
      <S.InputArea>
        <form onSubmit={submitHandler}>
          <input className="email" type="email" value={email} text="EMAIL"  onChange={emailHandler}/>
          <input className="password" type="password" value={password} text="PASSWORD"  onChange={passwordHandler}/>
          <S.SubmitButton type='submit' value="LOGIN"/>
        </form>
      </S.InputArea>
    </S.LoginArea>
  )
}

export default LoginBox