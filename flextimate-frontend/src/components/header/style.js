import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 101px;
  background: #151515;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  height: 100%;
  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    width: 13vw;
  }
  .logo-container img {
    width: 100%;
  }
  .right-menu{
    width: 300px;
    height: 100%;
    color: #fff;
    font-size: 14px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 30px;
  }
  .right-menu .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;