import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 9.3vh;
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
    align-items: flex-start;

    position: relative;
    top: 38%;

    gap: 30px;
  }

  .right-menu .dropdown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .right-menu .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

 
`;


export const Dropdown = styled.div`
  width: 100%;
  height: ${props=>props.height};
  background: #202020;
  position: relative;
  z-index: 2;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  .dropdown-content {
    display: ${props=>props.display};
    opacity: ${props=>props.opacity};;
    gap: 10px;
    
    transition: opacity ease 5s
  }


  .logout-icon, p{
    margin-top: 10px;
  }
`;