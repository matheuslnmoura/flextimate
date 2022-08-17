import styled from 'styled-components';

export const FilmWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: #1c1c1c;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .collapse-control {
    width: 100%;
  }

  p{
    margin-left: 25px;
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0px;
  }
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