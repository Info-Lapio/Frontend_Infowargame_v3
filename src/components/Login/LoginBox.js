import * as S from './style';
import LoginInput from './LoginInput'

const LoginBox = () => {
  return (
    <S.LoginArea>
      <S.MainLogoStyled />
      <S.LoginTitle>LOGIN</S.LoginTitle>
      <S.InputArea>
        <form>
          <LoginInput text="EMAIL"/>
          <LoginInput text="PASSWORD"/>
          <S.SubmitButton type='submit' value="LOGIN"/>
        </form>
      </S.InputArea>
    </S.LoginArea>
  )
}

export default LoginBox