import styled from 'styled-components';

export const bodyWrapper = styled.div`
  width: 100vw;

  display: flex;

`;

export const projectsArea = styled.main`
  flex: 1;
  padding-top: 6vh;
  padding-left: 1.25vw;



  h1 {
    font-size: 2.1vw;
    font-weight: 600;
    margin-left: 1.4vw;
  }

  .filter-icon-wrapper {
    height: 1.04vw;
    font-size: 1.04vw;
    color: #e20613;
    margin-left: 1.4vw;
    margin-top: 3.4vh;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    p{
      color: #fff;
      font-size: 1.04vw;
    }
  }
`;

export const ProjectDisplay = styled.div`
  width: 100%;
  margin-top: 4.4vh;

  table{
    border-collapse: collapse;
    border-spacing: 8px;
  }

  table tbody{
    margin-top: 15px;
  }
  
  th, td {
    width: 12.5vw;
    font-size: 1.1vw;
    font-weight: 500;
    text-align: center;
    padding-right: 17px;
  }

  th:nth-child(3),
  th:nth-child(3) {
    width: 15vw;
  }
  
  th {
    padding-bottom: 20px;
  }

  tbody td {
    height: 50px;
    vertical-align: middle;
    font-weight: 300;
  }

  tbody tr:nth-child(odd) {
    background-color: #1c1c1c;
  }

  tbody tr:nth-child(even) {
    background-color: #242424;
  }

  tbody tr:hover {
    background-color: #e20613;
  }
  
  .spinner-container {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 50vh;
    left: 50vw;
  }
`;

export const TableRow = styled.tr`
  background: ${props=>props.background};
`;

