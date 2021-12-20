import * as S from './style';
import LoginInput from './LoginInput'

const LoginBox = () => {
  return (
    <S.LoginArea>
      <S.MainLogoStyled />
      <S.LoginTitle>LOGIN</S.LoginTitle>
      <S.InputArea>
        <LoginInput text="EMAIL"/>
        <LoginInput text="PASSWORD"/>
      </S.InputArea>
    </S.LoginArea>
  )
}

export default LoginBox