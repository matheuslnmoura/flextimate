import styled from 'styled-components';

export const bodyWrapper = styled.div`
  width: 100vw;

  display: flex;

`;

export const projectArea = styled.main`
  flex: 1;
  height: 300px;
  padding-top: 6vh;
  padding-left: 1.25vw;



  
  
  `;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  
  
  h1 {
    font-size: 2.1vw;
    font-weight: 600;
    margin-left: 1.4vw;
  }

  .arrow-icons-wrapper {
    width: 20px;
    height: 20px;

    font-size: 20px;
    color: #e20613;
  }
`;

export const ProjectDisplay = styled.div`
  flex: 1;
  height: 500px;

  margin-top: 4.4vh;

`;

export const ProjectInfoWrapper = styled.div`
  width: 90%;
  height: 200px;
  margin: auto;

  display: flex;
  gap: 30px;

`;

export const ProjectInfoContainer = styled.div`
  min-width: 27.7vw;
  max-width: 30vw;
  height: fit-content;
  background: #1c1c1c;
  border-radius: 14px;
  padding: 8px;

  .field-container {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .field-container p {
    font-weight: 600;
  }

  .field-container input {
    width: fit-content;
    background: transparent;
    border: none;
    font-size: inherit;
    color: inherit
  }

  .field-container.address-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }

  .field-container.address-container .row {
    display: flex;
    gap: 5px;
  }

`;

export const InformationLabelWrapper = styled.div`
    display: ${props => props.display};
    flex-direction: column;

    p {
    margin-bottom: 7px;
    margin-left: 7px;
    font-weight: 700;
    font-size: 20px;
  }
`;


export const DescriptionLabelWrapper = styled.div`
    display: ${props => props.display};
    flex-direction: column;

    p {
    margin-bottom: 7px;
    margin-left: 7px;
    font-weight: 700;
    font-size: 20px;
  }
`;

export const ProjectDescriptionWrapper = styled.div`
  width: 90%;
  height: 200px;
  margin: auto;

  display: flex;
  gap: 30px;
`;



export const QuoteInfo = styled.div`
  width: 90%;
  margin: auto;

  display: flex;
`;

export const ButtonWrapper = styled.div`
  width: 16vw;
  background: #b00511;
  border-radius: 14px;

  display: flex;
  justify-content: center;
  gap: 15px;
  
  padding: 2.7vh 0px;
  color: #fff;
  font-size: 3.2vh;
  font-weight: 600;

  div {
    color: #fff;
    font-size: 3.2vh;
    font-weight: 700;
  }
`;