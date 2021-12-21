import * as S from './style'

const LoginInput = (props) => {
  const type = props.text === 'PASSWORD' ? 'password' : ''

  return (
    <S.PutText type={type} placeholder={`${props.text}을 입력해주세요!`}/>
  )
}

export default LoginInput