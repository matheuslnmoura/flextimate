import React, { useState } from 'react';
import {Collapse} from 'react-collapse';

import * as S from './style';

export default function LuminaryField(){
  const [isLuminaryOpen, setIsLuminaryOpen] = useState(false);

  return(
    <>
      <S.LuminaryWrapper  >
        <span className="collapse-control" onClick={()=>{setIsLuminaryOpen(!isLuminaryOpen);}} >
          <p>Luminária 1</p>
        </span>
        
        <Collapse className='collapse' isOpened = {isLuminaryOpen}>
          <S.CollapseItems>
            <div className="description-wrapper">
              <span>Descrição</span>
              <textarea />
            </div>
          </S.CollapseItems>
        </Collapse>
      </S.LuminaryWrapper>
    
    </>
  );
}