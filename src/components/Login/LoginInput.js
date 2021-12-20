import * as S from './style'

const LoginInput = (props) => {
  return (
    <S.PutText placeholder={`${props.text}을 입력해주세요!`}/>
  )
}

export default LoginInput