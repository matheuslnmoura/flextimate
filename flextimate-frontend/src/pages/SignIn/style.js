import styled from 'styled-components';
import signInBackgroung from './backgroundLogin.png';




export const SignInPage = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  `;

export const SignInModal = styled.main`
  width: 60vw;
  height: 90vh;
  display: flex;
  justify-content: space-between;
  
  `;

export const SignInLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  background-image: url(${signInBackgroung});
  background-size: cover;
  background-position: center;

  .text-container{
    width: 85%;
    height: fit-content;
    position: relative;
    top: 30%;
    font-family: 'Montserrat', sans-serif;
  }

  .title {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 25px;
  }


`;

export const SignInRight = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 0px 14px 14px 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo-wrapper{
    width:50%;
    background: #fff;
  }
  .logo-wrapper img{
    width:100%;
  }
  .error-messages{
    color: #b00511;
    font-size: 12px;
    opacity: ${props=>props.opacity};
  }
`;

export const FormWrapper = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;

  a {
    width: fit-content;
    align-self: flex-end;
    font-size: 12px;
    margin-bottom: 15px;
    text-decoration: none;
    color: #b00511;
  }
`;

export const InputField = styled.div`
  width: ${props=>props.width};
  height: ${props=>props.height};
  background: ${props=>props.background};
  border: ${props=>props.border};
  border-bottom: 1px solid #c7c7c7;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  input {
    width: 100%;
    height: 20px;
    border:none;
    padding-left: 8px;
    font-size: 14px;
    outline: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 60000000s 0s, color 60000000s 0s;
  }

  .show-password-icon{
    width:27px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 25px;
  background-color: #b00511;
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-container{
    width: 30%;
  }
`;

