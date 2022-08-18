import styled from 'styled-components';

export const LuminaryWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: #1c1c1c;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  
  .collapse-control {
    width: 100%;
    margin-left: 25px;
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0px;
  }

  .ReactCollapse--collapse {
    width: 100%;
    display: flex;
    flex-direction: row;
  }


  .ReactCollapse--content {
    width: 100%;
  }
`;


export const CollapseItems = styled.div`
  width: 100%;

  display: flex;
  gap: 50px;

  .description-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 18px;
  }
  .description-wrapper span {
    font-size: 17px;
    margin-bottom: 10px;
  }

  .description-wrapper textarea {
    background: transparent;
    width: 300px;
    height: 100px;
    color: #fff;
  }
`;

export const FilmsContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  .material-collapse-control {
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0px;
    border-bottom: 1px solid #b00511;
  }
  .material-collapse-control p {
    margin-left: 40px;

  }
`;

export const AditionalFilmsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AddButton = styled.div`
  width: 100%;
  color: #b00511;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin: 8px -8px;
`;