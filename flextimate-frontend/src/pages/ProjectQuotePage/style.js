import styled from 'styled-components';

export const QuoteInfo = styled.div`
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
`;


export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;

  /* border-bottom: 10px solid #1c1c1c;
  border-radius: 12px; */
`;

export const MaterialsNav = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 3.5vh;
  font-weight: 600;
`;

export const StaticBorder = styled.div`
  width: 100%;
  height: 10px;
  background: #1c1c1c;
  border-radius: 12px;
  margin-top: 5px;
`;

export const DinamicBorder = styled.div`
  width: 50%;
  height: 10px;
  background: #e20613;
  border-radius: 12px;
  position: relative;
  top: -10px;
  left: ${props=>props.leftSpacing};
`;

export const QuoteArea = styled.section `
  width: 100%;
  height: 500px;
  margin-top: 60px;
`;

export const MaterialsField = styled.div`
  width: 100%;
  height: 500px;
  display: ${props=>props.display};
`;

export const InstallationField = styled.div`
  width: 100%;
  height: 500px;
  background: #666;
  display: ${props=>props.display};
`;