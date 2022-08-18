import styled from 'styled-components';

export const FilmWrapper = styled.div`
  width: 95%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 40px;

  .film-collapse-control {
    width: 100%;
    border-bottom: 2px solid #2b2b2b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }


  .film-collapse-control p{
    margin-left: 40px;
    font-size: 25px;
    font-weight: 500;
    padding: 20px 0px;
  }

  .film-collapse-control .delete-icon {
    width: 20px;
    height: 20px;
    font-size: 20px;
    margin-right: 12px;
    color: #b00511;
    position: relative;
    z-index: 2;
  }

  .ReactCollapse--collapse {
    border: none;
    margin-bottom: 30px;;
    width: 100%;
  }

  .ReactCollapse--content {
    width: 100%;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`;

export const InputsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 2.9vw;
  border: none;
  margin-top: 20px;
  margin-left: 10px;
`;




export const CollapseItems = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

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