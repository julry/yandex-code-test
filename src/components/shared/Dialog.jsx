import React from 'react';
import styled from 'styled-components';
import { DialogTail } from './svg/DialogTail';
import { BorderBlock } from './BorderBlock';

const Tail = styled(DialogTail)`
  width: 23px;
  height: 26px;
  position: absolute;
  bottom: -25px;
  ${({position}) => position === 'right' ? 'right: -1px; transform: scale(-1, 1);' : 'left: -1px'};
`;

export const Dialog = (props) => {
    return (
        <BorderBlock {...props}>
            <Tail position={props.position}/>
            {props.children}
        </BorderBlock>
    );
};