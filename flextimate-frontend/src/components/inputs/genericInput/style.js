import styled from 'styled-components';

export const InputField = styled.div`
  width: 12.5vw;
  height: 5.1vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  margin-bottom: 30px;


  .input-container {
    width: 100%;
    height: 55px;
    border: 1px solid #a7a7a7;
    border-radius: 4px;
    margin-top: 10px; 
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .currency {
    font-size: 14px;
    padding-left: 5px;
  }

  input{
    border: none;
    outline: none;
    background: none;
    width: 100%;
    height: 33px;
    color: #fff;
    padding-left: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }


  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type=number] {
    -moz-appearance:textfield;
  }
  
`;