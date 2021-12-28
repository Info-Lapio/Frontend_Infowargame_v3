import styled from 'styled-components'

export const LoginPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL + "/images/security.png"});
  background-repeat: no-repeat;
  position: relative;
`

export const LoginArea = styled.div`
  width: 456px;
  height: 670px;
  background: #FFFFFF;
  border-radius: 20px;

  position: absolute;
  top: 180px;
  right: 151px;
`

export const MainLogoStyled = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${process.env.PUBLIC_URL + "/images/InfoLogo.jpg"});
  background-size: contain;
  background-repeat: no-repeat;

  position: absolute;
  top: 20px;
  right: 20px;
`;

export const LoginTitle = styled.div`
  font-family: 'CookieRunOTF-Bold', sans-serif;
  color: #000000;
  font-size: 40px;

  position: absolute;
  top: 149px;
  left: 46px;
`

export const InputArea = styled.div`
  position: absolute;
  top: 270px;
  left: 71px;

  .email, .password {
    position: absolute;
    width: 311px;
    height: 40px;

    padding-left: 17px;

    background: white;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }

  input:nth-child(2){
    top: 80px;
  }
`

export const PutText = styled.input`
  position: absolute;
  width: 311px;
  height: 40px;

  padding-left: 17px;

  background: white;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`

export const SubmitButton = styled.input`
  position: absolute;
  top: 220px;
  width: 311px;
  height: 50px;

  border: 0;
  background: #000000;
  border-radius: 10px;

  color: white;
  font-family: CookieRun;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  
  padding-bottom: 5px;

  cursor: pointer;
`