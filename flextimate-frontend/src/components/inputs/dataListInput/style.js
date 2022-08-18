import styled from 'styled-components';

export const DataListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataList = styled.div`

  border: none;
  outline: none;
  background: #000;
  width: 100%;
  color: #fff;
  padding-left: 5px;
  font-size: 14px;
  display: ${props => props.display};
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  .options-wrapper{
    width: 100%;
    height: 100px;
    margin-left: -5px;
    background-color: #2c2c2c;
    overflow-y: scroll;
    position: absolute;
    z-index: 2;
    padding-top: 5px;
  }    
  .options {
    margin-left: 6px;
    margin-bottom: 5px;
  }

  .options:hover {
    color: #b00511;
  }

      /* width */
  .options-wrapper::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  .options-wrapper::-webkit-scrollbar-track {
    background: none
  }

  /* Handle */
  .options-wrapper::-webkit-scrollbar-thumb {
    background: #b00511;
  }

  /* Handle on hover */
  .options-wrapper::-webkit-scrollbar-thumb:hover {
    background: none;
  }
  
`;