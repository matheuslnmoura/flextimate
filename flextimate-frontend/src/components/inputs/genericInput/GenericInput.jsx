import React from 'react';
import * as S from './style';

export default function GenericInput(props){
  // eslint-disable-next-line react/prop-types
  const {width, height, background, border} = props;
  return(
    <S.InputField width = {width} height = {height} background={background} border={border}>
      
    </S.InputField>
  );
}